import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-10 bg-white shadow-lg rounded-lg">
                <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
                <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
                <p className="text-gray-500 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Error404;
