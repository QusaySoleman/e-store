import React, { useState } from "react";
import "./SignupSignin.css";
function SignupSignin() {
  const [request, setRequest] = useState("Signup");
  return (
    <div className="form-container">
      <div className="background-opacity">
        <div className="signin-form">
          <h2 className="signin-header">{request}</h2>
          <div className="inputs-container">
            {request === "Login" ? (
              <div></div>
            ) : (
              <input type="text" className="name" placeholder="Your name" />
            )}

            <input type="email" className="email" placeholder="Your email" />
            <input
              type="password"
              className="password"
              placeholder="Password"
            />
            {request === "Login" ? (
              <></>
            ) : (
              <input
                type="password"
                className="password"
                placeholder="Confirm Password"
              />
            )}
          </div>

          {request === "Login" ? (
            <div className="forget-password">
              <span
                onClick={() => {
                  setRequest("Signup");
                }}
              >
                Forgot your password ?
              </span>
            </div>
          ) : (
            <div></div>
          )}
          {request === "Signup" ? (
            <div className="have-account">
              <span
                onClick={() => {
                  setRequest("Login");
                }}
              >
                Already have account ?
              </span>
            </div>
          ) : (
            <div></div>
          )}
          <div className="buttons">
            <button
              className={request === "Signup" ? "active-btn" : ""}
              onClick={() => {
                setRequest("Signup");
              }}
            >
              Sign up
            </button>
            <button
              className={request === "Login" ? "active-btn" : ""}
              onClick={() => {
                setRequest("Login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupSignin;
