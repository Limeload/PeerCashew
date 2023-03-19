import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom';
import login from "../images/login.png";

function Login({ onLogIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
            .then(loggedInUser => {
                onLogIn(loggedInUser)
                history.push('/')
            })
        setEmail("")
        setPassword("")
    }

  return (
    <div className="login-form">
            <div className='form'>
            <Link className='link' exact to='/'><h1>PeerCashew</h1></Link>
            <br />
        <h5 className='text-1'>WELCOME BACK!</h5>
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
