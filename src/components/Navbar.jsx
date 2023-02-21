import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <div className="w-screen h=[80px] z -10 bg-zinc-200 fixed drop-shadlow-lg">
      {/* <div className = 'px-2 flex justify-between'> */}
      {/* <Icon icon="heroicons-outline:menu" /> */}
      <Icon icon="heroicons-outline:menu" />

      <ul className=" md: flex">
        <li className="display: inline text-3x1 font-bold mr-4  sm:text-4xl">
          Home
        </li>
        <li className="display: inline text-3x1 font-bold mr-4  sm:text-4xl">
          Contact
        </li>
        <li className="display: inline text-3x1 font-bold mr-4  sm:text-4xl">
          About
        </li>
        <li className="display: inline text-3x1 font-bold mr-4  sm:text-4xl">
          Search
        </li>
      </ul>
      <div>
        <button className="border-none bg-transparent text-black mr-4">
          Sign In
        </button>
        <button className="px-8 py-3"> Register </button>
      </div>
    </div>
  );
};

export default Navbar;
