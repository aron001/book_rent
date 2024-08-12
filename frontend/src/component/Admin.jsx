import React from 'react';
import Sidebar from './sideBar';

import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineBell,
  AiOutlineSetting,
} from 'react-icons/ai';
import {
  LineChart,
  Line,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { month: 'Jan', amount: 400 },
  { month: 'Feb', amount: 300 },
  { month: 'Mar', amount: 500 },
  { month: 'Apr', amount: 200 },
  { month: 'May', amount: 600 },
  { month: 'Jun', amount: 400 },
];

const genreData = [
  { name: 'Fiction', value: 40, color: '#4F8EF7' }, // Blue
  { name: 'Self-Help', value: 30, color: '#34D399' }, // Green
  { name: 'Business', value: 20, color: '#F87171' }, // Red

];

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Menu */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-4 space-y-4">
        {/* Top Card */}
        <div className="bg-white h-12 p-4 shadow-lg rounded-lg mb-4 flex">
          <h3 className="text-lg font-medium mb-2">Admin</h3>
          <h3 className="text-lg font-medium mb-2 text-slate-600">/Dashboard</h3>
        </div>

        {/* Container for Long Card, Main Card, and Bottom Card */}
        <div className="flex flex-1">
          {/* Long Card */}
          <div className="w-80 bg-white p-6 shadow-lg rounded-lg mr-4">
            <h3 className="text-lg font-medium mb-4">this Month Statics</h3>

            {/* Income Card */}
            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="flex justify-between">
                <h4 className="text-md font-medium text-slate-600 mb-2">Income</h4>
                <h4 className="text-md font-medium text-slate-600 mb-2">This Month</h4>
              </div>

              <p className="text-slate-800 text-2xl font-bold">ETB 3,200</p>
              <p className="text-slate-800 text-xs font-light mt-1">compared to ETB 3,900 last month</p>

              <div className="flex justify-between mt-2">
                <h4 className="text-sm font-normal text-slate-600 mb-2">Last Month Income</h4>
                <h4 className="text-sm font-normal text-slate-600 mb-2">ETB 4,000</h4>
              </div>
            </div>

            {/* Available Books Card */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-between">
                <h4 className="text-md font-medium text-slate-600 mb-2">Available Books</h4>
                <h4 className="text-sm font-normal text-slate-600 mb-2">Today</h4>
              </div>
              <div className="flex flex-col items-start">
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={genreData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      innerRadius={40}
                      fill="#8884d8"
                      labelLine={false}
                      stroke="none"
                    >
                      {genreData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-2 flex flex-col items-start space-y-2">
                  {genreData.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between w-full">
                      <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: entry.color }}></div>
                      <p className="text-gray-800">{entry.name}</p>
                      <p className="text-gray-800 ml-auto"></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Container for Main Card and Bottom Card */}
          <div className="flex-1 flex flex-col space-y-4">
            {/* Main Card */}
            <div className="bg-white flex-1 p-6 shadow-lg rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Live Book Status</h3>
                <div className="flex space-x-4">
                  <AiOutlineSearch size={20} className="cursor-pointer" />
                  <AiOutlineMenu size={20} className="cursor-pointer" />
                  <AiOutlineBell size={20} className="cursor-pointer" />
                  <AiOutlineSetting size={20} className="cursor-pointer" />
                </div>
              </div>

              {/* Table */}
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="py-2">No</th>
                    <th className="py-2">Book No</th>
                    <th className="py-2">Book Name</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">1</td>
                    <td className="py-2">B001</td>
                    <td className="py-2">John Doe</td>
                    <td className="py-2 flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      Available
                    </td>
                    <td className="py-2">$15.00</td>
                    <td className="py-2 flex space-x-2">
                      <AiFillEdit className="text-blue-500 cursor-pointer" />
                      <AiFillDelete className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">1</td>
                    <td className="py-2">B001</td>
                    <td className="py-2">John Doe</td>
                    <td className="py-2 flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      Available
                    </td>
                    <td className="py-2">$15.00</td>
                    <td className="py-2 flex space-x-2">
                      <AiFillEdit className="text-blue-500 cursor-pointer" />
                      <AiFillDelete className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="py-2">2</td>
                    <td className="py-2">B002</td>
                    <td className="py-2">Jane Smith</td>
                    <td className="py-2 flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      Rented
                    </td>
                    <td className="py-2">$20.00</td>
                    <td className="py-2 flex space-x-2">
                      <AiFillEdit className="text-blue-500 cursor-pointer" />
                      <AiFillDelete className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">3</td>
                    <td className="py-2">B003</td>
                    <td className="py-2">Michael Johnson</td>
                    <td className="py-2 flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      Available
                    </td>
                    <td className="py-2">$18.00</td>
                    <td className="py-2 flex space-x-2">
                      <AiFillEdit className="text-blue-500 cursor-pointer" />
                      <AiFillDelete className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom Card */}
            <div className="bg-white h-[30%] p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-medium mb-4">Earning Summary</h3>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F8EF7" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#4F8EF7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#4F8EF7"
                    fillOpacity={1}
                    fill="url(#colorAmount)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
