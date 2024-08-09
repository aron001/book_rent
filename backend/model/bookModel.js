const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  coverPicture: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isRented: { type: Boolean, default: false },
  rentalPrice: { type: Number, default: 0 }, // Tracks the rental price when the book is rented
  rentalHistory: [
    {
      rentedAt: { type: Date, default: Date.now },
      rentalPrice: { type: Number },
    }
  ],
  approved: { type: Boolean, default: false }, // Indicates whether the owner is approved
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;







// // models/bookModel.js

// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Book name is required'],
//     trim: true,
//   },
//   category: {
//     type: String,
//     required: [true, 'Category is required'],
//     trim: true,
//   },
//   coverPicture: {
//     type: String,
//     required: [true, 'Cover picture is required'],
//     trim: true,
//   },
//   price: {
//     type: Number,
//     required: [true, 'Price is required'],
//     min: [0, 'Price cannot be negative'],
//   },
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
// }, {
//   timestamps: true,
// });

// const Book = mongoose.model('Book', bookSchema);

// module.exports = Book;
