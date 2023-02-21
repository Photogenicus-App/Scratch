import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddLibrary = () => {
  // useNavigate to redirect
  const navigate = useNavigate();
  // send new info to the database
  const submit = (event) => {
    // prevent form from refreshing upon submission
    event.preventDefault();
    // refer to the new info
    const title = document.getElementById('title');
    const desc = document.getElementById('desc');
    const content = document.getElementById('content');
    // create new object to pass on to the server
    const newLibrary = {
      title: title.value,
      description: desc.value,
      studyMaterial: content.value,
    };

    console.log(newLibrary);
    // details of the post request
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLibrary),
    };
    // make a post request to the server
    fetch('/data/library', options)
      .then((data) => data.json())
      .then((data, err) => {
        if (data.err) {
          alert('Invalid input(s)');
          const form = document.getElementById('add-form');
          form.reset();
        } else {
          navigate('/home');
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div id="header">
        <h1>
          photogenicus Sorcis <br />
          <br />
        </h1>
      </div>

      <form
        onSubmit={submit}
        id="add-form"
        className="bg-indigo-800 rounded-2xl p-20"
      >
        <label className="text-white">Title: </label>
        <br />
        <input type="text" placeholder="Topic" id="title" className="rounded" />
        <br />
        <label className="text-white">Description: </label>
        <br />
        <input
          type="text"
          placeholder="Describe this library"
          id="desc"
          className="rounded"
        />
        <br />
        <label className="text-white">Content: </label>
        <br />
        <textarea
          placeholder="Resources"
          id="content"
          rows="10"
          cols="70"
          className="rounded"
        />
        <br />
        <input
          type="submit"
          value="Add"
          className="inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        />
        <button
          className="inline bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => navigate('/home')}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddLibrary;
