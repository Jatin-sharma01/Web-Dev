import React, { useState } from "react";
import "./Signup.css"; 
import Header from "../../components/Header";
import Img1 from "../../assets/register.png";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [classes, setClasses] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = {
      firstName,
      lastName,
      rollNo,
      phoneNo,
      email,
      profilePicture,
      classes,
      password,
    };
    await axios
      .post(`${BASE_URL}/usersignup`, studentData)
      .then((response) => {
        alert("Student registered successfully!");
        setFirstName("");
        setLastName("");
        setRollNo("");
        setPhoneNo("");
        setEmail("");
        setProfilePicture("");
        setClasses("");
        setPassword("");

        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log("Student Data:", studentData);
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const studentData = {
      
      email,
      password,
    };
    await axios
      .post(`${BASE_URL}/usersignin`, studentData)
      .then((response) => {
        navigate("/loginmenu");
        
        setEmail("");
        setPassword("");

        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log("Student Data:", studentData);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            {isLogin ? (
              <form className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                </div>
                <button className="btn solid" onClick={(e) => handleSignin(e)}>
                  Sign in
                </button>
              </form>
            ) : (
              <form className="sign-in-form">
                <h2 className="title">Sign up</h2>
                <div className="pippo">
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                    />
                  </div>
                  <div className=" input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="pippo">
                  <div className="input-field">
                    <i className="fas fa-id-card"></i>
                    <input
                      type="text"
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                      placeholder="Roll Number"
                    />
                  </div>
                  <div className=" input-field">
                    <i className="fas fa-chalkboard-teacher"></i>
                    <input
                      type="text"
                      value={classes}
                      onChange={(e) => setClasses(e.target.value)}
                      placeholder="Class"
                    />
                  </div>
                </div>
                <div className="pippo">
                  <div className="input-field">
                    <i className="fas fa-phone"></i>
                    <input
                      type="text"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="pippo">
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user-circle"></i>
                    <input
                      type="text"
                      value={profilePicture}
                      onChange={(e) => setProfilePicture(e.target.value)}
                      placeholder="Profile Picture"
                    />
                  </div>
                </div>
                <button className="btn" onClick={(e) => handleSubmit(e)}>
                  Sign up
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="panels-container">
          {isLogin ? (
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, ex ratione. Aliquid!
                </p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </button>
              </div>
              <img src={Img1} className="image" />
            </div>
          ) : (
            <div className="panel left-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam ad deleniti.
                </p>
                <button
                  className="btn transparent"
                  id="sign-in-btn"
                  onClick={() => setIsLogin(true)}
                >
                  Sign in
                </button>
              </div>
              <img src={Img1} className="image" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
