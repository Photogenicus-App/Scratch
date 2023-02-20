import React from 'react';
import { library } from 'webpack';
import LibraryInfo from './LibraryInfo.jsx';

// Library component, will render the boxes of library info
function Library() {

  // we define our initial set(libraries; []) and grab our update state func(setLibraries)
  const [libraries, setLibraries] = useState([]);

  // invoke useEffect, which performs side effect AFTER our component renders, will fetch our LibraryInfo cards
  useEffect(() => {
    // we fetch our cards
    fetch('wtvr ext. grabs our libraries from theDB')
      .then((res) => res.json())
      // we update our state to fetched libraries by using setLibraries
      .then((libraryList) => {
        setLibraries(libraryList);
        console.log('list :', libraryList);
      })
      // catch errs
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="page-container">
      <button onClick={handleAddLibrary}>
        <Link to="/addLibrary">
          +
        </Link>
      </button>

      {libraries.map((lib, i) => {
        <div>
          <LibraryInfo 
            key={`${i}`} 
            libId={`${library._id}`} 
            title={`${lib.title}`} 
            description={`${lib.description}`} 
            libraries={`${libraries}`}
          />
        </div>;
      })}
    </div>
  );
}

export default Library;
