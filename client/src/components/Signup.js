import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom';
import register from "../images/register.jpg";

function Signup({ onLogIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  let history = useHistory()

  function handleSubmit(e) {
        e.preventDefault()
        let signupInput = {
            name: name,
            email: email,
            password: password,
            date_of_birth: date_of_birth,
            address: address
        }
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(signupInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newUser => onLogIn(newUser))
                    history.push('/')
                }
            })
        setName("")
        setEmail("")
        setPassword("")
        setDateOfBirth("")
        setAddress("")
    }

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
