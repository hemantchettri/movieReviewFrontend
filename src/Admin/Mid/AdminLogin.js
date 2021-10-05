import axios from "axios";
import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
const { Component } = require("react");

class AdminLogin extends Component {
  state = {
    username: "",
    password: "",
  };

  onChangeAdminLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginAdminButton = (e) => {
    e.preventDefault();
    const loginAdminData = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:90/admin/login", loginAdminData)
      .then((result) => {
        console.log(result.data.t);
        window.location.href = "/userdetails";
        localStorage.setItem("token", result.data.t);
        localStorage.setItem("id", result.data.userId);
        localStorage.setItem("userType", "ADMIN");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <>
        <div className="container course-create text-center">
          <h1>Admin Login</h1>
          <form method="POST">
            <div className="form-group">
              <label htmlFor="name">Enter Admin username</label>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.onChangeAdminLogin}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Enter password</label>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="email"
                  value={this.state.password}
                  onChange={this.onChangeAdminLogin}
                  required
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="button"
                onClick={this.loginAdminButton}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AdminLogin;
