import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();

    const user = document.getElementById('user1');
    const pass = document.getElementById('pass1');

    const info = {
      username: user.value,
      password: pass.value,
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    };
    fetch('/user/login', options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // if valid go to home
        if (data.err) {
          alert('Incorrect username or password');
          const form = document.getElementById('login-form');
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
            Sign into your account
          </h1>
          <form
            className="space-y-2 md:space-y-6"
            onSubmit={submit}
            id="login-form"
          >
            <div>
              <label className="text-white block mb-2 text-sm font-medium">
                Username
              </label>
            </div>
            <div>
              <input
                className="rounded"
                type="text"
                placeholder="user1234"
                id="user1"
              />
            </div>
            <div>
              <label className="text-white">Password</label>
            </div>
            <div>
              <input
                className="rounded"
                type="text"
                placeholder="qwerty"
                id="pass1"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="w-full flex items-start">
                <input
                  className="w-full bg-indigo-400 px-6 py-2.5 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg hover:text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
            <p className="text-white">
              Don't have an account yet?
              <Link className=" " to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
