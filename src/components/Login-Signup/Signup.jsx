import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();

    const user = document.getElementById('user');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');

    const newUser = {
      username: user.value,
      email: email.value,
      password: pass.value,
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    };
    fetch('/user/signup', options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // need to redirect to home on succesful post
        if (data.err) {
          alert('Username or email already taken.');
          const form = document.getElementById('signup-form');
          form.reset();
        } else {
          navigate('/home');
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-indigo-800">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-2xl font-bold leading-tight text-white">
            Create an account
          </h1>
          <form autoComplete="off" onSubmit={submit} id="signup-form">
            <div className="mt-5 mb-1">
              <label className="text-white block mb-1">Email</label>
              <input
                className=" outline-none focus:outline-indigo-200 focus:border-indigo-200 rounded mb-5"
                type="text"
                placeholder=" you@company.com"
                id="email"
              />
            </div>
            <div className="mt-1 mb-1">
              <label className="text-white block">Username</label>
            </div>
            <div>
              <input
                className="rounded outline-none focus:outline-indigo-200 focus:border-indigo-200"
                type="text"
                placeholder=" wunderpus photogenicus"
                id="user"
              />
            </div>

            <div className="mt-5 mb-1">
              <label className="text-white block">Password</label>
            </div>
            <div>
              <input
                className="rounded mb-5 outline-none focus:outline-indigo-200 focus:border-indigo-200"
                type="text"
                placeholder=" ••••••••"
                id="pass"
              />
            </div>
            <div className="flex items-center justify-between ">
              <div className="w-full flex items-start">
                <button
                  className="mt-5 mb-3 w-full bg-indigo-400 px-6 py-2.5 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg hover:text-white outline-none hover:outline-indigo-200 hover:border-indigo-200"
                  type="submit"
                  value="Signup"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
