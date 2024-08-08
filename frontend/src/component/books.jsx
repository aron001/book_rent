import React from 'react';
import { AiFillEye, AiFillDelete, AiFillHome, AiOutlineAppstore, AiFillSetting, AiFillBell, AiFillBook, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

const Books = () => {
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
                  {/* Example Rows */}
                  <tr className="border-t border-b hover:bg-gray-50 transition">
                    <td className="py-2 px-4 text-gray-600">1</td>
                    <td className="py-2 px-4 text-gray-600">J.K. Rowling</td>
                    <td className="py-2 px-4 text-gray-600">Library A</td>
                    <td className="py-2 px-4 text-gray-600">Fantasy</td>
                    <td className="py-2 px-4 text-gray-600">Harry Potter</td>
                    <td className="py-2 px-4 text-gray-600">Available</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition">
                    <td className="py-2 px-4 text-gray-600">2</td>
                    <td className="py-2 px-4 text-gray-600">George R.R. Martin</td>
                    <td className="py-2 px-4 text-gray-600">Library B</td>
                    <td className="py-2 px-4 text-gray-600">Fantasy</td>
                    <td className="py-2 px-4 text-gray-600">A Song of Ice and Fire</td>
                    <td className="py-2 px-4 text-gray-600">Checked Out</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition">
                    <td className="py-2 px-4 text-gray-600">3</td>
                    <td className="py-2 px-4 text-gray-600">J.R.R. Tolkien</td>
                    <td className="py-2 px-4 text-gray-600">Library C</td>
                    <td className="py-2 px-4 text-gray-600">Fantasy</td>
                    <td className="py-2 px-4 text-gray-600">The Hobbit</td>
                    <td className="py-2 px-4 text-gray-600">Available</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition">
                    <td className="py-2 px-4 text-gray-600">4</td>
                    <td className="py-2 px-4 text-gray-600">Agatha Christie</td>
                    <td className="py-2 px-4 text-gray-600">Library A</td>
                    <td className="py-2 px-4 text-gray-600">Mystery</td>
                    <td className="py-2 px-4 text-gray-600">Murder on the Orient Express</td>
                    <td className="py-2 px-4 text-gray-600">Checked Out</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="py-2 px-4 text-gray-600">5</td>
                    <td className="py-2 px-4 text-gray-600">Harper Lee</td>
                    <td className="py-2 px-4 text-gray-600">Library B</td>
                    <td className="py-2 px-4 text-gray-600">Classic</td>
                    <td className="py-2 px-4 text-gray-600">To Kill a Mockingbird</td>
                    <td className="py-2 px-4 text-gray-600">Available</td>
                  </tr>
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
