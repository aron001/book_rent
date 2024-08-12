import React from 'react';
import {
  AiFillHome,
  AiOutlineAppstore,
  AiFillSetting,
  AiFillBell,
  AiFillBook,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineBell,
  AiOutlineSetting
} from 'react-icons/ai';

import { Link } from 'react-router-dom';




const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Menu */}
      <div className="w-64 bg-blue-950 text-white flex flex-col p-6 rounded-r-lg mb-4 ml-4 mt-6 justify-between">
        <nav className="flex flex-col space-y-2">
        <Link to="/admin">
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillHome size={15} className="mr-2" /> Dashboard
          </button>
          </Link>
          <Link to="/books">

          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillBook size={15} className="mr-2" /> Book
          </button>
          </Link >
          <Link to="/owners">

          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillBook size={15} className="mr-2" /> Owners
          </button>
          </Link>
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiOutlineAppstore size={15} className="mr-2" /> Other
          </button>
          
          
          <Link to="/other">

          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillSetting size={15} className="mr-2" /> Settings
          </button>
          </Link>
          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiFillBell size={15} className="mr-2" /> Notifications
          </button>
          <Link to="/login">

          <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            <AiOutlineLogin size={15} className="mr-2" /> Log in as Bookowner
          </button>
          </Link>

        </nav>
        <Link to="/login">

        <div className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          <AiOutlineLogout size={15} className="mr-2" /> Logout
        </div>
        </Link >

      </div>

    
    </div>
  );
};

export default Sidebar;





// import React from 'react';
// import {
//   AiFillHome,
//   AiOutlineAppstore,
//   AiFillSetting,
//   AiFillBell,
//   AiFillBook,
//   AiOutlineLogin,
//   AiOutlineLogout,
//   AiOutlineSearch,
//   AiOutlineMenu,
//   AiOutlineBell,
//   AiOutlineSetting
// } from 'react-icons/ai';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from 'recharts';
// import { PieChart, Pie, Cell } from 'recharts';

// const data = [
//   { month: 'Jan', amount: 400 },
//   { month: 'Feb', amount: 300 },
//   { month: 'Mar', amount: 500 },
//   { month: 'Apr', amount: 200 },
//   { month: 'May', amount: 600 },
//   { month: 'Jun', amount: 400 },
// ];

// const genreData = [
//   { name: 'Fiction', value: 40, color: '#4F8EF7' }, // Blue
//   { name: 'Self-Help', value: 30, color: '#34D399' }, // Green
//   { name: 'Business', value: 20, color: '#F87171' }, // Red
// ];

// const AdminDashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar Menu */}
//       <div className="w-64 bg-blue-950 text-white flex flex-col p-6 rounded-r-lg mb-4 ml-4 mt-6 justify-between">
//         <nav className="flex flex-col space-y-2">
//           <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//             <AiFillHome size={15} className="mr-2" /> Dashboard
//           </button>
//           <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//             <AiOutlineAppstore size={15} className="mr-2" /> Other
//           </button>
//           <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//             <AiFillBook size={15} className="mr-2" /> Owners
//           </button>
//           <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//             <AiFillBook size={15} className="mr-2" /> Book
//           </button>
//           <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//             <AiFillSetting size={15} className="mr-2" /> Settings
//           </button>
//           <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//             <AiFillBell size={15} className="mr-2" /> Notifications
//           </button>
//           <button className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//             <AiOutlineLogin size={15} className="mr-2" /> Log in as Bookowner
//           </button>
//         </nav>
//         <div className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition">
//           <AiOutlineLogout size={15} className="mr-2" /> Logout
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col p-4 space-y-4">
//         {/* Top Card */}
//         <div className="bg-white h-20 p-4 shadow-lg rounded-lg mb-4">
//           <h3 className="text-lg font-semibold mb-2">Top Card</h3>
//           <p className="text-gray-700">This is a small card above the Long Card, taking the full width of the remaining space.</p>
//         </div>

//         {/* Container for Long Card, Main Card, and Bottom Card */}
//         <div className="flex flex-1">
//           {/* Long Card */}
//           <div className="w-80 bg-white p-6 shadow-lg rounded-lg mr-4">
//             <h3 className="text-lg font-semibold mb-4">Long Card</h3>

//             {/* Income Card */}
//             <div className="bg-blue-100 p-4 rounded-lg mb-4">
//               <h4 className="text-md font-semibold mb-2">Income This Month</h4>
//               <p className="text-blue-800 text-2xl font-bold">$3,200</p>
//             </div>

//             {/* Available Books Card */}
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h4 className="text-md font-semibold mb-2">Available Books</h4>
//               <div className="flex flex-col items-start">
//                 <ResponsiveContainer width="100%" height={200}>
//                   <PieChart>
//                     <Pie
//                       data={genreData}
//                       dataKey="value"
//                       nameKey="name"
//                       cx="50%"
//                       cy="50%"
//                       outerRadius={60} // Decreased size
//                       innerRadius={40} // Adding inner radius for white center
//                       fill="#8884d8"
//                       labelLine={false}
//                       stroke="none" // Remove stroke
//                     >
//                       {genreData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
//                 <div className="flex flex-col items-start space-y-2">
//                   {genreData.map((entry, index) => (
//                     <div key={index} className="flex items-center">
//                       <div
//                         className="w-4 h-4 rounded-full mr-2 border-2"
//                         style={{
//                           backgroundColor: entry.color,
//                           borderColor: entry.color,
//                         }}
//                       ></div>
//                       <p className="text-gray-800">{entry.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Container for Main Card and Bottom Card */}
//           <div className="flex-1 flex flex-col space-y-4">
//             {/* Main Card */}
//             <div className="bg-white flex-1 p-6 shadow-lg rounded-lg">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold">Main Card</h3>
//                 <div className="flex space-x-4">
//                   <AiOutlineSearch size={20} className="cursor-pointer" />
//                   <AiOutlineMenu size={20} className="cursor-pointer" />
//                   <AiOutlineBell size={20} className="cursor-pointer" />
//                   <AiOutlineSetting size={20} className="cursor-pointer" />
//                 </div>
//               </div>

//               {/* Table */}
//               <table className="w-full text-left">
//                 <thead>
//                   <tr>
//                     <th className="py-2">No</th>
//                     <th className="py-2">Book No</th>
//                     <th className="py-2">Owner</th>
//                     <th className="py-2">Status</th>
//                     <th className="py-2">Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-t border-b border-gray-200">
//                     <td className="py-2">1</td>
//                     <td className="py-2">B001</td>
//                     <td className="py-2">John Doe</td>
//                     <td className="py-2">Available</td>
//                     <td className="py-2">$15.00</td>
//                   </tr>
//                   <tr className="border-t border-b border-gray-200">
//                     <td className="py-2">2</td>
//                     <td className="py-2">B002</td>
//                     <td className="py-2">Jane Smith</td>
//                     <td className="py-2">Rented</td>
//                     <td className="py-2">$20.00</td>
//                   </tr>
//                   <tr className="border-t border-b border-gray-200">
//                     <td className="py-2">3</td>
//                     <td className="py-2">B003</td>
//                     <td className="py-2">Michael Johnson</td>
//                     <td className="py-2">Available</td>
//                     <td className="py-2">$18.00</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {/* Bottom Card */}
//             <div className="bg-white h-[30%] p-6 shadow-lg rounded-lg">
//               <h3 className="text-lg font-semibold mb-4">Bottom Card</h3>
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={data}>
//                   <defs>
//                     <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#4F8EF7" stopOpacity={0.8}/>
//                       <stop offset="95%" stopColor="#4F8EF7" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="month" />
//                   <YAxis />
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="amount"
//                     stroke="#4F8EF7"
//                     fillOpacity={1}
//                     fill="url(#colorAmount)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
