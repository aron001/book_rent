const Book = require('../model/bookModel');
const fs = require('fs');
const path = require('path');

// Controller to add a new book
const addBook = async (req, res) => {
  try {
    const { name, category, price } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Cover picture is required' });
    }

    const coverPicture = `/uploads/covers/${req.file.filename}`;

    const newBook = new Book({
      name,
      category,
      coverPicture,
      price,
      owner: req.user.id, // Set book owner to current user
    });

    await newBook.save();

    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('owner', 'email');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a single book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('owner', 'email');
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a book
const updateBook = async (req, res) => {
  try {
    const { name, category, price } = req.body;
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Check if the user is the owner of the book or an admin
    if (book.owner.toString() !== req.user.id && req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    book.name = name || book.name;
    book.category = category || book.category;
    book.price = price || book.price;

    if (req.file) {
      // Remove old cover picture if exists
      if (book.coverPicture) {
        const oldCoverPicturePath = path.join(__dirname, '../', book.coverPicture);
        if (fs.existsSync(oldCoverPicturePath)) {
          fs.unlinkSync(oldCoverPicturePath);
        }
      }
      book.coverPicture = `/uploads/covers/${req.file.filename}`;
    }

    await book.save();

    res.status(200).json({ message: 'Book updated successfully', book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Check if the user is the owner of the book or an admin
    if (book.owner.toString() !== req.user.id && req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Remove cover picture if exists
    if (book.coverPicture) {
      const coverPicturePath = path.join(__dirname, '../', book.coverPicture);
      if (fs.existsSync(coverPicturePath)) {
        fs.unlinkSync(coverPicturePath);
      }
    }

    // Use deleteOne instead of remove
    await Book.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Controller to approve a book
const approveBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.approved = true;
    await book.save();

    res.status(200).json({ message: 'Book approved successfully', book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to change book status (active/inactive)
const changeBookStatus = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.status = req.body.status;
    await book.save();

    res.status(200).json({ message: 'Book status updated successfully', book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get owner's monthly income
const getOwnerMonthlyIncome = async (req, res) => {
  try {
    const { month, year } = req.query;
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    const books = await Book.find({ owner: req.user.id, 'rentalHistory.rentedAt': { $gte: startDate, $lt: endDate } });

    let totalIncome = 0;
    books.forEach(book => {
      book.rentalHistory.forEach(rental => {
        totalIncome += rental.rentalPrice;
      });
    });

    res.status(200).json({ totalIncome });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get admin's monthly rental earnings
const getMonthlyEarnings = async (req, res) => {
  try {
    const { month, year } = req.query;
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    const earnings = await Book.aggregate([
      {
        $match: {
          'rentalHistory.rentedAt': { $gte: startDate, $lt: endDate },
        },
      },
      {
        $unwind: '$rentalHistory',
      },
      {
        $group: {
          _id: null,
          totalEarnings: { $sum: '$rentalHistory.rentalPrice' },
        },
      },
    ]);

    res.status(200).json({ totalEarnings: earnings[0] ? earnings[0].totalEarnings : 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update the rental status of a book (Owner's operation)
const updateRentalStatus = async (req, res) => {
  try {
    const { isRented, rentalPrice } = req.body;
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    if (book.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    book.isRented = isRented;

    if (isRented) {
      book.rentalPrice = rentalPrice;
      book.rentalHistory.push({ rentalPrice });
    } else {
      book.rentalPrice = 0;
    }

    await book.save();

    res.status(200).json({ message: 'Rental status updated successfully', book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  approveBook,
  changeBookStatus,
  getMonthlyEarnings,
  getOwnerMonthlyIncome,
  updateRentalStatus
};
