import React, { useState } from 'react';
import { AiFillEye, AiFillDelete } from 'react-icons/ai';
import Sidebar from './sideBar';

const Owners = () => {
  // State to track approval status of each book
  const [approved, setApproved] = useState([false, false, false, false, false]);

  // Function to toggle approval status
  const toggleApproval = (index) => {
    const updatedApproved = [...approved];
    updatedApproved[index] = !updatedApproved[index];
    setApproved(updatedApproved);
  };

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
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Owner</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Upload</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Location</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Book Name</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Status</th>
                    <th className="py-2 px-4 font-semibold text-sm text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {/* Example Rows */}
                  {['J.K. Rowling', 'George R.R. Martin', 'J.R.R. Tolkien', 'Agatha Christie', 'Harper Lee'].map((owner, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition">
                      <td className="py-2 px-4 text-gray-600">{index + 1}</td>
                      <td className="py-2 px-4 text-gray-600">{owner}</td>
                      <td className="py-2 px-4 text-gray-600">Library {String.fromCharCode(65 + index % 3)}</td>
                      <td className="py-2 px-4 text-gray-600">Fantasy</td>
                      <td className="py-2 px-4 text-gray-600">Book Title {index + 1}</td>
                      <td className="py-2 px-4 text-gray-600">
                        <div className="flex items-center">
                          <span className={`text-green-600 font-semibold mr-2 ${approved[index] ? 'opacity-100' : 'opacity-50'}`}>
                            {approved[index] ? 'Approved' : 'Pending'}
                          </span>
                          <div
                            className={`relative inline-block w-20 h-3 rounded-full border border-light-green shadow-md ${approved[index] ? 'bg-green-400' : 'bg-gray-200'}`}
                            onClick={() => toggleApproval(index)}
                          >
                            <div
                              className={`absolute w-4 h-4 bg-green-500 rounded-full shadow transform ${approved[index] ? 'translate-x-16' : 'translate-x-0'} transition-transform duration-300`}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 text-gray-600 flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 transition">
                          <AiFillEye size={20} />
                        </button>
                        <button className="text-red-600 hover:text-red-800 transition">
                          <AiFillDelete size={20} />
                        </button>
                        <button
                          onClick={() => toggleApproval(index)}
                          className={`py-1 px-3 rounded ${
                            approved[index] ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                          } hover:bg-gray-700 transition`}
                        >
                          {approved[index] ? 'Disapprove' : 'Approve'}
                        </button>
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

export default Owners;
