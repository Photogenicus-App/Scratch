import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h=[80px] bg-indigo-500 fixed drop-shadlow-lg ">
      {/* <Icon icon="oi:menu" className='w-5' /> */}
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="/home" className="text-3x1 font-bold mr-4 sm:text-4xl">
            wunderSource
          </Link>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          <button class="bg-indigo-400 px-6 py-2.5 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:shadow-lg hover:text-white outline-none hover:outline-indigo-200 hover:border-indigo-200">
            Save changes
          </button>
          <button class="bg-indigo-400 px-6 py-2.5 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:shadow-lg hover:text-white outline-none hover:outline-indigo-200 hover:border-indigo-200">
            Button 2
          </button>
        </div>
        <div onClick={handleClick}>
          {!nav ? (
            <Icon icon="oi:menu" className="w-5" />
          ) : (
            <Icon icon="mdi:alpha-x" width="40" height="40" />
          )}
        </div>
      </div>
      {/* list for drop down */}
      <ul className={!nav ? 'hidden' : 'absolute bg-indigo-500 w-full px-8'}>
        {/* //  'absolute bg-zinc-200 w-full px-8' */}
        <li className="border-b-2 bg-indigo-500 w-full">Home</li>
        <li className="border-b-2 bg-indigo-500 w-full">About</li>
        <li className="border-b-2 bg-indigo-500 w-full">Support</li>
        <div className="flex flex-col my-4">
          <button class="bg-transparent hover:bg-sky-700 ... px-8 py-3 mb-4">
            Save changes
          </button>
          <button class="bg-transparent hover:bg-sky-700 ... px-8 py-3 mb-43">
            Button 2
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
