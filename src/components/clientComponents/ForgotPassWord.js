import React from "react";
import { NavLink } from "react-router-dom";

function ForgotPassWord() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onsubmit="event.preventDefault()" className="box">
              <h1>Forgot your pass word ? </h1>
              <p className="text-muted">Your mail</p>

              <input type="email" name placeholder="yourmail@mail.com" />
              <button type="submit" className="">
                Send reset password link
              </button>
              <a className="forgot text-muted" href="#">
                {" "}
                <NavLink
                  className="nav-link"
                  to="/signin"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Go back to the login page
                </NavLink>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassWord;
