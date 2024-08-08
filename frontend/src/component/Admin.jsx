import React from 'react';
import { AiFillEye, AiFillDelete, AiFillHome, AiOutlineAppstore, AiFillSetting, AiFillBell, AiFillBook, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
const AdminDashboard = () => {
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
        <div className="bg-white h-20 p-4 shadow-lg rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-2">Top Card</h3>
          <p className="text-gray-700">This is a small card above the Long Card, taking the full width of the remaining space.</p>
        </div>

        {/* Container for Long Card, Main Card, and Bottom Card */}
        <div className="flex flex-1">
          {/* Long Card */}
          <div className="w-80 bg-white p-6 shadow-lg rounded-lg mr-4">
            <h3 className="text-lg font-semibold mb-4">Long Card</h3>
            <p className="text-gray-700">This is a long card with a white background, next to the Main Card and Bottom Card.</p>
          </div>

          {/* Container for Main Card and Bottom Card */}
          <div className="flex-1 flex flex-col space-y-4">
            {/* Main Card */}
            <div className="bg-white flex-1 p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Main Card</h3>
              <p className="text-gray-700">This is the main card, taking 70% of the vertical space.</p>
            </div>

            {/* Bottom Card */}
            <div className="bg-white h-[30%] p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Bottom Card</h3>
              <p className="text-gray-700">This is the bottom card, taking the remaining 30% of the vertical space.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
