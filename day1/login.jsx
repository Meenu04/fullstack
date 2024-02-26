import  { useState } from 'react';
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = () => {
    // Add your login logic here, for example, sending the mobile number to a server for verification.
    console.log(`Logging in with mobile number: ${mobileNumber}`);
  };

  return (
    <div className="login-container" style={{ backgroundImage: 'url(https://images.unsplash.com/18/trickle.JPG?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbmRyb3BzJTJCZ2xhc3N8ZW58MHx8MHx8fDA%3D)' }}>
      <div className="login-box">
       <b><h2   className='texts'>Login</h2></b>
       <center> <form>
        <input style={{color:'black'}}
          type="text"
        
          placeholder="Mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <br/>
        <input style={{color:'black'}}
          type="text"
        
          placeholder="Password"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
       <Link to="/user/home"><button onClick={handleLogin}>Login</button></Link></form></center>
      </div>
    </div>
  );
};

export default Login;
