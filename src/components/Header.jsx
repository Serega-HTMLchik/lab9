import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function logOut() {
    localStorage.removeItem("registered");
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    window.location.reload();
  }
  return (
    <div  style={{width:'100%', backgroundColor:'#9090e8', height:'100px', dysplay:'flex', color:'#ffffff'}}>
      <Link className="btn btn-primary" to="/" >
        Main
      </Link>
      <Link className="btn btn-primary ms-4" to="/profile">
        My Profile
      </Link>
      {!localStorage.getItem("registered") ? (
        <Link className="btn btn-primary ms-4" to="/sign-in">
          Sign in
        </Link>
      ) : null}
      {localStorage.getItem("registered") ? (
        <button
          className="btn btn-outline-danger float-end"
          onClick={() => logOut()}
        >
          Quit
        </button>
      ) : null}
    </div>
  );
};

export default Header;
