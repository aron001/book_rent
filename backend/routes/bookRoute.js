// routes/bookRoutes.js

const express = require('express');
const multer = require('multer');
// const { addBook, getAllBooks, updateBook, deleteBook } = require('../controller/bookController');
const { authenticateUser } = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/roleMiddleware');
const {
  addBook,
  getAllBooks,
  // getBookById,
  updateBook,
  deleteBook,
  approveBook,
  changeBookStatus,
  getMonthlyEarnings,
  getOwnerMonthlyIncome,
  updateRentalStatus
} = require('../controller/bookController');
const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/covers/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 2 }, // 2 MB limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(file.originalname.toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    }
    cb('Error: Images Only! (jpeg, jpg, png)');
  },
});


// Routes for book operations
router.post('/add', authenticateUser, authorizeRole('BookOwner'), upload.single('coverPicture'), addBook);
router.get('/all', getAllBooks);
router.get('/income', authenticateUser, authorizeRole('BookOwner'), getOwnerMonthlyIncome); // Owner's monthly income
router.get('/earnings', authenticateUser, authorizeRole('Admin'), getMonthlyEarnings); // Admin's earnings report
// router.get('/:id', getBookById);
router.put('/update/:id', authenticateUser, authorizeRole('BookOwner'), upload.single('coverPicture'), updateBook);
router.put('/approve/:id', authenticateUser, authorizeRole('Admin'), approveBook);
router.put('/status/:id', authenticateUser, authorizeRole('Admin'), changeBookStatus);
router.put('/rental/:id', authenticateUser, authorizeRole('BookOwner'), updateRentalStatus); // Update rental status
router.delete('/delete/:id', authenticateUser, authorizeRole('Admin'), deleteBook);

// Routes for book operations

// router.post('/add', authenticateUser, authorizeRole('BookOwner'), upload.single('coverPicture'), addBook);
// router.get('/all', getAllBooks);
// router.put('/update/:id', authenticateUser, authorizeRole('BookOwner'), upload.single('coverPicture'), updateBook);
// router.delete('/delete/:id', authenticateUser,  deleteBook);

module.exports = router;
