import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from "../images/login.jpg";



function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="login-form">
            <div className='form'>
            <Link className='link' exact to='/'><h1>PeerCashew</h1></Link>
            <br />
        <h1 className='text-1'>WELCOME BACK!</h1>
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
        <Button type="submit">Log In</Button>
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
