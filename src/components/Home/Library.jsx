import React from 'react';
import LibraryInfo from './LibraryInfo.jsx';

function Library() {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    fetch('')
      .then((res) => res.json())
      .then((libraryList) => {
        setRecipes(libraryList);
        console.log('list :', libraryList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {libraries.map((lib, i) => {
        <div>
          <LibraryInfo id={`${i}`} />
        </div>;
      })}
    </div>
  );
}

export default Library;
