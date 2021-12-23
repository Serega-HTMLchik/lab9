import React from "react";

class SignInPage extends React.Component {
  register() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");

    localStorage.setItem("registered", true);
    localStorage.setItem("login", login.value);
    localStorage.setItem("password", password.value);
  }

  render() {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="card bg-light bg-gradient shadow col-2 p-3">
          <form action="">
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="login"
                type="text"
                id="login"
              />
              <label for="login">login</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder="password"
                type="password"
                id="password"
              />
              <label for="password">password</label>
            </div>
            <button className="btn btn-primary" onClick={() => this.register()}>
              Accept
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInPage;