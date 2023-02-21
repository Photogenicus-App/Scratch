import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Library component, will render the boxes of library info
function IndividualLibrary() {
  // define const location given the value of the result from invoking useLocation; will be used to grab state and params id of recipe
  const location = useLocation();

  // grab our libraries from state passed from link
  const libraries = location.state.libraries;

  // we now have our libraries in an array, use find to grab the one that fits our id
  const foundLibrary = libraries.find(
    (libr) => libr._id === location.state.libId
  );

  console.log(foundLibrary);

  // using useState define state for our library props and an edit
  const [title, setTitle] = useState(foundLibrary.title);
  const [description, setDescription] = useState(foundLibrary.description);
  const [studyMaterial, setStudyMaterial] = useState(
    foundLibrary.studyMaterial
  );
  const [edit, setEdit] = useState(false);

  // define a function to change edit to rerender our library with inputs
  const handleEditButton = function () {
    setEdit(true);
  };

  // send a put request for library
  const handleSaveEdit = function () {
    // define our updated library to send in request
    const updatedLibrary = {
      _id: foundLibrary._id,
      title: title,
      description: description,
      studyMaterial: studyMaterial,
    };

    // then we make a put request to proper url sending our updated library
    fetch('/data/library', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedLibrary),
    });
    // decide what we want to do after update

    // reassign edit to false so we render w changes
    setEdit(false);
  };

  if (!edit) {
    return (
      <div
        id="page-container"
        className="flex flex-col items-center text-center bg-gradient-to-t from-white to-indigo-500"
      >
        <div>
          <h1 className="w-32 mx-auto bg-indigo-400 m-3">{title}</h1>

          <h5 className="w-32 mx-auto bg-indigo-400 m-5">{description}</h5>

          <p className="w-9/12 mx-auto bg-indigo-400 m-8">{studyMaterial}</p>
        </div>

        <button
          onClick={handleEditButton}
          className="w-36 mx-auto bg-indigo-800 text-white h-10 rounded hover:text-indigo-600 hover:border-indigo-600 hover:border hover:bg-white transition duration-200 ease-in-out justify-center flex items-center"
        >
          edit
        </button>
      </div>
    );
  } else {
    return (
      <div
        id="page-container"
        className="flex flex-col items-center text-center bg-gradient-to-t from-white to-indigo-500"
      >
        <div id="header">
          <h1>photogenicus Sorcis</h1>
        </div>

        <div>
          <h1>
            <input
              className="w-32 mx-auto bg-indigo-400 m-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </h1>

          <h5>
            <input
              className="w-32 mx-auto bg-indigo-400 m-5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </h5>

          <p>
            <textarea
              className="w-full mx-auto bg-indigo-400 m-8"
              value={studyMaterial}
              onChange={(e) => setStudyMaterial(e.target.value)}
            />
          </p>
        </div>

        <div className="flex">
          <button
            className="w-36 mx-auto bg-indigo-800 text-white h-10 rounded hover:text-indigo-600 hover:border-indigo-600 hover:border hover:bg-white transition duration-200 ease-in-out justify-center flex items-center"
            onClick={handleSaveEdit}
          >
            save
          </button>

          <button
            className="w-36 mx-auto bg-indigo-400 text-white h-10 rounded hover:text-indigo-600 hover:border-indigo-600 hover:border hover:bg-white transition duration-200 ease-in-out justify-center flex items-center"
            onClick={() => setEdit(false)}
          >
            cancel
          </button>
        </div>
      </div>
    );
  }
}

export default IndividualLibrary;
