import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import register from "../images/register.jpg";

function Signup({ handleLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(name, email, password, date_of_birth, address);
  };

  return (
    <div className="login-form">
    <div className='form'>
    <Link className='link' exact to='/'><h1>PeerCashew</h1></Link>
    <br />
<h5 className='text-1'>Create an Account</h5>
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3">
<Form.Label>Full Name</Form.Label>
        <Form.Control
        required
        type="text"
        id="name"
        autoComplete="off"
        value={name}
        onChange= {(e) => setName(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Email</Form.Label>
        <Form.Control
        required
        type="email"
        placeholder="example@gmail.com"
        id="email"
        autoComplete="off"
        value={email}
        onChange= {(e) => setEmail(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3">
       <Form.Label>Create Password</Form.Label>
        <Form.Control
        required
        type="text"
        id="password"
        autoComplete="off"
        value={password}
        onChange= {(e) => setPassword(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3">
       <Form.Label>Date of Birth</Form.Label>
        <Form.Control
        required
        type="date"
        id="date_of_birth"
        autoComplete="off"
        value={date_of_birth}
        onChange= {(e) => setDateOfBirth(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3">
       <Form.Label>Address</Form.Label>
        <Form.Control
        required
        type="textarea"
        id="address"
        autoComplete="off"
        value={address}
        onChange= {(e) => setAddress(e.target.value)}/>
</Form.Group>
<Button variant="dark" type="submit">Create Account</Button>
</Form>
<br />
<div>
Already have an account? <Link exact to='/login'>Login instead</Link>
    </div>
    </div>
    <div className='image'>
        <img src={register} alt={register} />
    </div>
</div>
  );
}

export default Signup;
