import React from 'react';
import { Link, useRouteError } from 'react-router';
import '../App.css'

const Error = () => {
    const error = useRouteError();

  return (
       <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center custom-font">
      <h1 className="text-[120px] md:text-[160px] font-extrabold text-green-500 leading-none">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
        "Oops! It looks like this page took a wrong turn. Let’s get you back on track."
      </h2>

      <p className="text-gray-500 mt-2 mb-6 max-w-md">
        {error?.statusText || error?.message || 
        "Sorry, the page you are looking for doesn’t exist or has been moved."}
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-300"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default Error;