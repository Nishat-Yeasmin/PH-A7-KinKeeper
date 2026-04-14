import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">

        {/* Big Number */}
        <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Oops! Page not found
        </h2>

        <p className="mt-2 text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Go Back Home
          </Link>
        </div>

        {/* Extra decoration */}
        <p className="mt-6 text-sm text-gray-400">
          If you think this is a mistake, please check the URL again.
        </p>
      </div>
    </div>
    );
};

export default ErrorPage;