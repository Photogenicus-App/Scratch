import React from 'react';
import { Link } from 'react-router-dom';

function LibraryInfo({ title, description, libraries, libId }) {
  return (
    <div
      id="library-info"
      className="shadow-lg bg-gradient-to-t from-indigo-400 to-indigo-200 hover:from-white hover:to-white text-black hover:text-indigo-700 w-96 border-black border-solid border rounded-xl text-center h-40 flex flex-col content-center justify-around p-5"
    >
      <h2 className="text-xl">
        {title}
        <br />
      </h2>

      <p className="">{description}</p>

      <Link
        to={`/${libId}`}
        state={{ libraries: libraries, libId: `${libId}` }}
        className="w-36 mx-auto bg-indigo-800 text-white h-10 rounded hover:text-indigo-600 hover:border-indigo-600 hover:border hover:bg-white transition duration-400 ease-in-out justify-center flex items-center"
      >
        <span>View Library</span>
      </Link>
    </div>
  );
}

export default LibraryInfo;
