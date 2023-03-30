import React, { useState } from 'react';

function SignUp({setCurrentUser}) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const signUpDetails = {first_name, last_name, username, password, bio, email}

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpDetails)
    }).then((res)=> res.json()).then((user)=> console.log(user))
    
  };

  return (
    <div className="container" style={{minHeight: "100vh"}}>
        <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input className="form-control form-control-sm"  type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
        </label>

        <label>
            Last Name:
            <input className="form-control form-control-sm" type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
        </label>

        <label>
            Username:
            <input className="form-control form-control-sm" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>

        <label>
            Email:
            <input className="form-control form-control-sm" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
            Password:
            <input className="form-control form-control-sm" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        {/* <label>
            Confirm Password:
            <input className="form-control form-control-sm" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label> */}

        <label>
            Bio:
            <textarea className="form-control form-control-sm" value={bio} onChange={(e) => setBio(e.target.value)} />
        </label>

        <button type="submit">Sign Up</button>
        </form>
    </div>
  );
}

export default SignUp;
