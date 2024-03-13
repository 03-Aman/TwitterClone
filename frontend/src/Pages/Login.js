import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const [checkUser, setCheckUser] = useState(false);

  const userHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post('http://localhost:3001/login', {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem('jwtToken', JSON.stringify(response.data.token));
        setCheckUser(false);
        navigate('/posts');
        window.location.reload();
      } else {
        setCheckUser(true);
      }
    } catch (e) {
      setUsername('');
      setPassword('');
      setCheckUser(true);
      setLoginErr(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[40rem] bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Login</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={userHandler}
              className="appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={passwordHandler}
              className="appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            {checkUser && <p className="text-red-500 text-xs italic">User not found</p>}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Register instead?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;