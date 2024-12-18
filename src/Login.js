import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  useEffect(() => {
    const isloggedIn = localStorage.getItem('admin');
    if (!isloggedIn) {
      navigate('/'); 
    }
  }, [navigate]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
      setError((prev) => ({ ...prev, username: '' }));
    } else if (name === 'password') {
      setPassword(value);
      setError((prev) => ({ ...prev, password: '' }));
    }
  };

  const validate = () => {
    let isValid = true;
    const errorMessages = { username: '', password: '' };

    if (!username) {
      errorMessages.username = 'Username is required';
      isValid = false;
    } else if (
      username.length < 3 ||
      !/(\@gmail\.com|\@yahoo\.com|\@outlook\.com|\@hotmail\.com)$/.test(username)
    ) {
      errorMessages.username =
        'Username should be at least 3 characters long and a valid email';
      isValid = false;
    }

    if (!password) {
      errorMessages.password = 'Password is required';
      isValid = false;
    } else {
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(password)) {
        errorMessages.password =
          'Password must contain at least one number, one special character, and one capital letter';
        isValid = false;
      }
    }

    setError(errorMessages);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Logging in with:', username, password);
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      navigate('/dashboard');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="username">
            <label>Username</label>
            <input
              type="email"
              placeholder="Email"
              name="username"
              value={username}
              onChange={handleChange}
              className={error.username ? 'error' : ''}
            />
            {error.username && <p className="error">{error.username}</p>}
          </div>
          <div className="password">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              className={error.password ? 'error' : ''}
            />
            {error.password && <p className="error">{error.password}</p>}
          </div>
          <div className="button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
