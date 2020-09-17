import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
          <div className="navbar-brand" >
            <a href="/claims">MetLife</a>
          </div>
          <ul className="navbar-nav ml-auto list-unstyled">
            <li className="nav-item active navbar-center">
              <label>LOGIN</label>
            </li>
          </ul>
          <div className="text-center"><label>LOGIN</label>
          </div>
          <ul className="navbar-nav ml-auto list-unstyled">
            <li className="nav-item active">
              <div><a href="/">Profile</a></div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
