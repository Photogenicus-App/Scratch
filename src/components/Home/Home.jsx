import React from 'react';
import Library from './Library.jsx';
import { Link } from 'react-router-dom';

// landing page, will render library
function Home() {
  return (
    <div
      id="page-container"
      className="bg-gradient-to-t from-white to-indigo-200"
    >
      <div id="header">
        <h1>photogenicus Sorcis</h1>
      </div>

      <Link
        to="/add-library"
        className="text-xl ml-auto m-8 w-36 bg-indigo-800 text-white h-10 rounded hover:text-indigo-600 hover:border-indigo-600 hover:border hover:bg-white transition duration-200 ease-in-out justify-center flex items-center"
      >
        +
      </Link>

      <div>
        <Library />
      </div>
    </div>
  );
}

export default Home;
