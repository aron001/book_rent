// Books.js
import React from 'react';
import booksData from '../data/booksData'; // Adjust the path if needed
import Sidebar from './sideBar';

const Books = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Menu */}
      <Sidebar />

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
            <h3 className="text-sm font-semibold mb-4">List Owners</h3>

            {/* Table */}
            <div className="overflow-auto">
              <table className="min-w-full rounded-lg">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">No</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Author</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Owner</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Category</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Book Name</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {booksData.map((book, index) => (
                    <tr key={book._id} className="border-t border-b hover:bg-gray-50 transition">
                      <td className="py-2 px-4 text-gray-600">{index + 1}</td>
                      <td className="py-2 px-4 text-gray-600">{book.author}</td>
                      <td className="py-2 px-4 text-gray-600">{book.owner}</td>
                      <td className="py-2 px-4 text-gray-600">{book.category}</td>
                      <td className="py-2 px-4 text-gray-600">{book.name}</td>
                      <td className="py-2 px-4 text-gray-600">
                        <div className="flex items-center">
                          <span className={`text-green-600 font-semibold mr-2 ${book.status === 'active' ? 'opacity-100' : 'opacity-50'}`}>
                            {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                          </span>
                          <div
                            className={`relative inline-block w-20 h-3 rounded-full border border-light-green shadow-md ${book.status === 'active' ? 'bg-green-400' : 'bg-gray-200'}`}
                          >
                            <div
                              className={`absolute w-4 h-4 bg-green-500 rounded-full shadow transform ${book.status === 'active' ? 'translate-x-16' : 'translate-x-0'} transition-transform duration-300`}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
