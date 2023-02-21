import React from 'react';
import LibraryInfo from './LibraryInfo.jsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Library component, will render the boxes of library info
function Library() {
  // we define our initial set(libraries; []) and grab our update state func(setLibraries)
  const [libraries, setLibraries] = useState([]);
  
  // invoke useEffect, which performs side effect AFTER our component renders, will fetch our LibraryInfo cards
  useEffect(() => {
    // we fetch our cards
    fetch('/data/library')
      .then((res) => res.json())
      // we update our state to fetched libraries by using setLibraries
      .then((libraryList) => {
        setLibraries(libraryList);
        console.log(libraries);
      })
      // catch errs
      .catch((err) => console.log('err :', err));
  }, []);

  return (
    <div id="page-container">
      <button>

        <Link to="/add-library">
          +
        </Link>

      </button>
      
      {libraries.map((lib, i) => (
        <div key={`${i}`} >

          <LibraryInfo 
            key={`${i}`} 
            libId={lib._id} 
            title={lib.title} 
            description={lib.description} 

            libraries={libraries}
          />
        </div>
      ))}
    </div>
  );
}

export default Library;
