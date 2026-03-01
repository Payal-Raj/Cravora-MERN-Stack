import React, { useState, useEffect, useContext } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import Button from "../button/button";
import AOS from "aos";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const {url, setToken} = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");

  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangleHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}));
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newURL = url;
    if (currState === "Login") {
      newURL += "/api/user/login";
    }else{
      newURL += "/api/user/register";
    }

    const response = await axios.post(newURL, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    }else{
      alert(response.data.message);
    }
  }

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="login-popup" data-aos="fade-in" data-aos-duration="200">
      <form 
      onSubmit={onLogin}
        className="login-popup-container"
        data-aos="zoom-in"
        data-aos-duration="400"
        data-aos-easing="ease-out-cubic"
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input name="name" onChange={onChangleHandler} value={data.name} type="text" placeholder="Name" required />
          )}
          <input name="email" onChange={onChangleHandler} value={data.email} type="email" placeholder="Email" required />
          <input name="password" onChange={onChangleHandler} value={data.password} type="password" placeholder="Password" required />
        </div>
        <Button text={currState === "Sign Up" ? "Create Account" : "Login"} type="submit"/>
        <div className="login-popup-conditions">
          <input type="checkbox" required />
          <div className="conditions-text">
            By continuing, you agree to our <span>Terms</span> &{" "}
            <span>Privacy Policy</span>.
          </div>
        </div>

        {currState === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => {
                setCurrState("Sign Up");
              }}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrState("Login");
              }}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
