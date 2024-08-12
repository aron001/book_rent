import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import {
  AiFillHome,
  AiOutlineAppstore,
  AiFillSetting,
  AiFillBell,
  AiFillBook,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineDown,
  AiOutlineCloudUpload,
} from 'react-icons/ai';

const BookUploads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [detailsPopupOpen, setDetailsPopupOpen] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    name: '',
    author: '',
    category: '',
    coverPicture: null, // Add coverPicture state
  });

  const books = [
    "book 1",
    'book 2',
  ];

  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBook = () => {
    setDetailsPopupOpen(true);
    setDropdownOpen(false);
  };

  const closeDetailsPopup = () => {
    setDetailsPopupOpen(false);
    setSearchTerm('');
    setBookDetails({
      name: '',
      author: '',
      category: '',
      coverPicture: null,
    });
  };

  const handleFileChange = (e) => {
    setBookDetails({ ...bookDetails, coverPicture: e.target.files[0] });
  };
const handleApply = async () => {
  try {
    const formData = new FormData();
    formData.append('name', bookDetails.name);
    formData.append('author', bookDetails.author);
    formData.append('category', bookDetails.category);
    if (bookDetails.coverPicture) {
      formData.append('coverPicture', bookDetails.coverPicture);
    }

    // Retrieve the token from local storage or context
    const token = localStorage.getItem('token'); // or wherever you store your token

    const response = await axios.post('http://localhost:8000/api/books/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`, // Add token to Authorization header
      },
    });

    alert(`Book Added:\nName: ${bookDetails.name}\nAuthor: ${bookDetails.author}\nCategory: ${bookDetails.category}`);
    closeDetailsPopup();
  } catch (error) {
    console.error('Error adding book:', error);
    alert('An error occurred while adding the book. Please try again.');
  }
};


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Menu */}
      <div className="w-64 bg-blue-950 text-white flex flex-col p-6 rounded-r-lg mb-4 ml-4 mt-6 justify-between">
        <nav className="flex flex-col space-y-2">
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillHome size={15} className="mr-2" /> Dashboard
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiOutlineAppstore size={15} className="mr-2" /> Other
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillBook size={15} className="mr-2" /> Owners
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillBook size={15} className="mr-2" /> Book
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillSetting size={15} className="mr-2" /> Settings
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillBell size={15} className="mr-2" /> Notifications
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiOutlineLogin size={15} className="mr-2" /> Log in as Bookowner
          </button>
        </nav>
        <div className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          <AiOutlineLogout size={15} className="mr-2" /> Logout
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-4 space-y-4">
        {/* Top Card */}
        <div className="bg-white h-12 p-4 shadow-lg rounded-lg mb-1">
          <h3 className="text-sm font-semibold mb-1">Admin</h3>
        </div>

        {/* Container for New Card */}
        <div className="flex-1 flex flex-col space-y-4">
          {/* New Card Next to Sidebar and Below Top Card */}
          <div className="flex-1 bg-white p-6 shadow-lg rounded-lg mb-4">
            <h3 className="text-sm font-normal mb-4 text-center text-gray-700">
              Upload New Book
            </h3>

            {/* Container for Search Box, Book List, and Add Button */}
            <div className="flex flex-col items-center space-y-4">
              {/* Search Box with Dropdown Icon */}
              <div className="relative w-1/2">
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full pr-10 focus:outline-none focus:border-blue-500"
                  placeholder="Search for a book..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setDropdownOpen(true);
                  }}
                  onFocus={() => setDropdownOpen(true)}
                />
                <AiOutlineDown
                  size={18}
                  className="absolute right-2 top-3 text-gray-600 cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {/* Dropdown without Radio Buttons */}
                {dropdownOpen && (
                  <div className="absolute bg-white border border-gray-300 rounded-lg w-full mt-1 max-h-48 overflow-y-auto z-10 shadow-lg">
                    <ul className="w-full">
                      {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center"
                          >
                            <span className="text-gray-700">{book}</span>
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2 text-gray-500">
                          No matching books found.
                        </li>
                      )}
                    </ul>
                    {/* Add Button aligned with the book list */}
                    <div className="flex justify-start mt-2 px-4">
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                        onClick={handleAddBook}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cross-like Structure with Input Fields and Upload Section */}
              <div className="flex justify-between w-1/2 mt-8">
                {/* Left Input Field */}
                <div className="relative w-5/12 mt-20">
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 transition-all focus:outline-none ${
                      bookDetails.name ? 'border-blue-500' : ''
                    }`}
                    placeholder="Book Name"
                    value={bookDetails.name}
                    onChange={(e) => setBookDetails({ ...bookDetails, name: e.target.value })}
                  />
                  {/* Floating Label */}
                  <label
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all ${
                      bookDetails.name ? 'text-xs -translate-y-6' : ''
                    }`}
                  >
                    Book Name
                  </label>
                </div>

                {/* Right Input Field */}
                <div className="relative w-5/12 mt-20">
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 transition-all focus:outline-none ${
                      bookDetails.author ? 'border-blue-500' : ''
                    }`}
                    placeholder="Author"
                    value={bookDetails.author}
                    onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })}
                  />
                  {/* Floating Label */}
                  <label
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all ${
                      bookDetails.author ? 'text-xs -translate-y-6' : ''
                    }`}
                  >
                    Author
                  </label>
                </div>
              </div>

              {/* Category Input Field Centered Below */}
              <div className="relative w-1/2 mt-8">
                <input
                  type="text"
                  className={`w-full px-4 py-2 border-b-2 border-gray-300 focus:border-blue-500 transition-all focus:outline-none ${
                    bookDetails.category ? 'border-blue-500' : ''
                  }`}
                  placeholder="Category"
                  value={bookDetails.category}
                  onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })}
                />
                {/* Floating Label */}
                <label
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all ${
                    bookDetails.category ? 'text-xs -translate-y-6' : ''
                  }`}
                >
                  Category
                </label>
              </div>

              {/* Upload Cover Photo Section */}
              <input
                type="file"
                accept="image/*"
                className="mt-8"
                onChange={handleFileChange}
              />
              <button
                className="flex items-center justify-center mt-8 w-1/2 py-3 rounded-lg shadow-sm transition-all"
              >
                <AiOutlineCloudUpload size={24} className="text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-700">Upload Cover Photo</span>
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-20 rounded-lg hover:bg-blue-600 transition"
                onClick={handleApply}
              >
                Apply
              </button>
            </div>

            {/* Details Pop-up for Adding Book */}
            {detailsPopupOpen && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                  <h3 className="text-lg font-semibold mb-4">Add Book Details</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Book Name
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                      value={bookDetails.name}
                      onChange={(e) => setBookDetails({ ...bookDetails, name: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Author
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                      value={bookDetails.author}
                      onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                      value={bookDetails.category}
                      onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })}
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                      onClick={handleApply}
                    >
                      Apply
                    </button>
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                      onClick={closeDetailsPopup}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookUploads;
