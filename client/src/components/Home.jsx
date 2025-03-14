import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      {/* Hero Section */}
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Welcome to the MERN Auth App
      </h1>
      <p className="text-lg text-center max-w-lg mb-10">
        Securely register, log in, and access your personalized profile. Built with cutting-edge technology for seamless performance and robust security.
      </p>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <Link to="/register">
          <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-white text-green-500 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100">
            Login
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-sm opacity-75">
        © {new Date().getFullYear()} MERN Auth App. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
