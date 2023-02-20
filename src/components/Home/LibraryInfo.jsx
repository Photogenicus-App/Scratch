import React from 'react';
import { Link } from 'react-router-dom';

function LibraryInfo({ title, description, libraries, libId}) {
  return (
    <div id="library-info">
      <h2>
        {title}<br/>
      </h2>

      <p>
        {description}
      </p>

      <button>
        <Link to={`/${libId}`} state={{ libraries: libraries,libId: `${libId}` }}>
          View Library
        </Link>
      </button>
    </div>
  );
}

export default LibraryInfo;