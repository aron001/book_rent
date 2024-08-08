import React from 'react';

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-blue-950 flex items-center justify-center">
        <img 
          src="/Untitled.jpeg" 
          alt="Book" 
          className="max-w-xs max-h-full object-contain" 
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                required 
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">Already have an account?</p>
              <a 
                href="/login" 
                className="text-blue-500 hover:underline"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;