import React, { useState } from 'react';

function SignUp({setUserSignedIn}) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');

  const [login, setLogin] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const signUpDetails = {first_name, last_name, username, password, bio, email}

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpDetails)
    }).then((res)=> {
        if(res.ok){
            res.json().then(setUserSignedIn)
        } else {
            res.json().then(e => setErrors(Object.entries(e.error).flat()))
        }
    })
    
  };

  return (
    <div className="container reg-cont" style={{minHeight: "100vh"}}>
        <div className="reg-title">User Registration</div>
        <form onSubmit={handleSubmit}>
            <div className="reg-user-details">
                <div className="reg-input-box">
                    <span className='reg-details'>Fisrt Name</span>
                    <input className="form-control form-control-sm"  type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="reg-input-box">
                    <span className='reg-details'>Last Name</span>
                    <input className="form-control form-control-sm" type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="reg-input-box">
                    <span className='reg-details'>Username</span>
                    <input className="form-control form-control-sm" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="reg-input-box">
                    <span className='reg-details'>Email</span>
                    <input className="form-control form-control-sm" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="reg-input-box">
                    <span className='reg-details'>Password</span>
                    <input className="form-control form-control-sm" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="reg-input-box">
                    <span className='reg-details'>Bio</span>
                    <textarea className="form-control form-control-sm" value={bio} onChange={(e) => setBio(e.target.value)} />
                </div>

            </div>
            <div className="reg-button">
                <button type="submit" style={{width: "100%", height: "100%", outline: "none", color: "#fff", border: "none", background: "linear-gradient(135deg, #71b7e6, #9b59b6)"}}>Sign Up</button>
            </div>
        </form>

    </div>
  );
}

export default SignUp;
