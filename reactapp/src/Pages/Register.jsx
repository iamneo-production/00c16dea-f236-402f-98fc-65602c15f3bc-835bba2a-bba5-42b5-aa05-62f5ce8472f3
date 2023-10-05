import React, { useState } from 'react';
import '../Assets/Register.css';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [mobliNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [error, setError] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    } else {
      setError('');
    }

    // Registration logic here (you can dispatch an action if using Redux)

    nav('/login');
  }

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>REGISTER</h1>
        <label htmlFor="userName">User Name</label>
        <input type="text" placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="userName" required />
        <label htmlFor="mobileNo">Mobile Number</label>
        <input type="text" placeholder="" value={mobliNo} onChange={(e) => setMobileNo(e.target.value)} name="mobileNo" />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />
        <label htmlFor="confirmPassword">Confirm Password</label> {/* Add a confirm password field */}
        <input type="password" placeholder="" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" required />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
        <div className='login-option'>
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  )
}

export default Register;
