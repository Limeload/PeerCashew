import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from "../images/profile.png"

function Profile({ user, onLogOut, onLogIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
      setPassword(user?.password);
      setDateOfBirth(user?.date_of_birth);
      setAddress(user?.address);
    }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    let profileInput = {
      name: name,
      email: email,
      password: password,
      date_of_birth: dateOfBirth,
      address: address,
    };
    fetch('/users/' + user.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // 'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: JSON.stringify(profileInput),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((updatedUser) => {
            onLogOut();
            onLogIn(updatedUser);
          });
        }
      });
  }

  return (
    <div className='login-form'>
      <div className='form'>
        <h1>Profile</h1>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              required
              type='text'
              id='name'
              autoComplete='off'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type='email'
              placeholder='example@gmail.com'
              id='email'
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              required
              type='password'
              id='password'
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              required
              type='date'
              id='date_of_birth'
              autoComplete='off'
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type='textarea'
              id='address'
              autoComplete='off'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Button variant='dark' type='submit'> Save Changes</Button>
        </Form>
        <br />
        <div>
        Logged in as {user?.name}. <Link exact to='/'>Back to Home!</Link>
            </div>
            </div>
            <div className='image'>
                <img src={profile} alt={profile} />
            </div>
            </div>
  )
}

export default Profile;
