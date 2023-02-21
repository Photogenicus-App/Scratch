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
          <form onSubmit={submit} id="signup-form">
            <label>Username</label>
            <br />
            <input type="text" placeholder="user1234" id="user" />
            <br />
            <label>Email</label>
            <br />
            <input type="text" placeholder="user123@gmail.com" id="email" />
            <br />
            <label>Password</label>
            <br />
            <input type="text" placeholder="qwerty" id="pass" />
            <br />
            <input type="submit" value="Signup" />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
