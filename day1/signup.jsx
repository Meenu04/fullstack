import { useState } from 'react';
import "../../assets/css/signup.css"

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    mobileNumber: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSignup = () => {
    // Add your signup logic here, for example, sending user information to a server.
    console.log('Signing up with user information:', userInfo);
  };

  return (
    <div className="login-containe" style={{ backgroundImage: 'url(https://images.unsplash.com/18/trickle.JPG?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbmRyb3BzJTJCZ2xhc3N8ZW58MHx8MHx8fDA%3D)' }}>
      <div className="login-bo">
        <b><h2 className='text'>Signup</h2></b>
        <center>
          <form>
            <input
              style={{ color: 'black' }}
              type="text"
              placeholder="Mobile number"
              value={userInfo.mobileNumber}
              onChange={(e) => setUserInfo({ ...userInfo, mobileNumber: e.target.value })}
            /><br/><br/>
            <input
              style={{ color: 'black' }}
              type="text"
              placeholder="Username"
              value={userInfo.username}
              onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
            /><br/><br/>
            <input
              style={{ color: 'black' }}
              type="email"
              placeholder="Email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            /><br/><br/>
            <input
              style={{ color: 'black' }}
              type="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            />
            <button type="button" className='buttons' onClick={handleSignup}>
              Signup
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Signup;
