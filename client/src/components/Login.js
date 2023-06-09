import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom';
import login from "../images/login.png";

function Login({ onLogIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // send cookies and session data with the request
    })
      .then((res) => {
        if (res.ok) { // if the response status is 200-299
          return res.json();
        } else {
          throw new Error('Login failed'); // handle non-200 response status
        }
      })
      .then((loggedInUser) => {
        onLogIn(loggedInUser);
        history.push('/');
        history.push('/profile');
      })
      .catch((error) => {
        console.error(error);
        setError('Invalid username or password');
      });
  };


  return (
    <div className="login-form">
            <div className='form'>
            <Link className='link' exact to='/'><h1>PeerCashew</h1></Link>
            <br />
        <h5 className='text-1'>WELCOME BACK!</h5>
        {error && <p className="error">{error}</p>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
                <Form.Control
                type="text"
                id="email"
                autoComplete="off"
                value={email}
                onChange= {(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
               <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange= {(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="dark" type="submit">Log In</Button>
        </Form>
        <br />
        <div>
         Don't have an account yet? <Link exact to='/signup'>Sign up now!</Link>
            </div>
            </div>
            <div className='image'>
                <img src={login} alt={login} />
            </div>
        </div>
  );
}

export default Login;
