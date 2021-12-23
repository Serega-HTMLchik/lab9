import React from "react";
import { Redirect } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card bg-light bg-gradient shadow p-3">
        {!localStorage.getItem("registered") ? <Redirect to="/" /> : null}
        <div className="fs-4 p-2">
          Login: <div className="d-inline">{localStorage.getItem("login")}</div>
        </div>
        <div className="fs-4 p-2">
          Password:{" "}
          <div className="d-inline">{localStorage.getItem("password")}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;