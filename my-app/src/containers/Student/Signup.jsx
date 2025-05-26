import React, { useState } from 'react';
import './Signup.css'; // You'll need to style it with CSS similar to the design
import Header from '../../components/Header';
import Img1 from '../../assets/register.png'; 
const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  console.log(isLogin);

  return (
    <>
    <Header />
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          {isLogin ? 
          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            
          </form>
          : <form className="sign-in-form">
            <h2 className="title">Sign up</h2>
            <div className="pippo">
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="First Name" />
            </div>
            <div className=" input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Last Name" />
            </div>
            </div>
            <div className="pippo">
            <div className="input-field">
              <i className="fas fa-id-card"></i>
              <input type="text" placeholder="Roll Number" />
            </div>
            <div className=" input-field">
              <i className="fas fa-chalkboard-teacher"></i>
              <input type="text" placeholder="Class" />
            </div>
            </div>
            <div className="pippo">
            <div className="input-field">
              <i className="fas fa-phone"></i>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div></div>
            <div className="pippo">
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-user-circle"></i>
              <input type="text" placeholder="Profile Picture" />
            </div></div>
            <input type="submit" className="btn" value="Sign up" />
            
          </form>}
            
        </div>
      </div>

      <div className="panels-container">
        { isLogin ?<div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => setIsLogin(false)}>
              Sign up
            </button>
          </div>
          <img src={Img1} className="image"/>
        </div> : 
        <div className="panel left-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => setIsLogin(true)}>
              Sign in
            </button>
          </div>
          <img src={Img1} className="image"/>
        </div>
        }
        
        
      </div>
    </div>
    </>
  );
};

export default Signup;
