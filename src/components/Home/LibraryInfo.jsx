import React from 'react';
import { Link } from 'react-router-dom';

function LibraryInfo({ title, description, libraries, libId }) {
  return (
    <div
      id="library-info"
      className="w-96 border-black border-solid border rounded-lg  text-center h-40 flex flex-col content-center justify-around p-5"
    >
      <h2>
        {title}
        <br />
      </h2>

      <p>{description}</p>

      <button className="bg-purple-500 text-white h-8">
        <Link
          to={`/${libId}`}
          state={{ libraries: libraries, libId: `${libId}` }}
          className="bg-purple-500 text-white h-8"
        >
          View Library
        </Link>
      </button>
    </div>
  );
}

export default LibraryInfo;
