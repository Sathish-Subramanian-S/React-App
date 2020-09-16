import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class Navbar extends Component {
    render() {
        return (
            <div class='navbar-whitecolor'>
                <nav className="navbar navbar-whitecolor navbar-expand-lg navbar-light bg-dark justify-content-between">
                    <div className="navbar-brand nav-item navbar-nav" >
                        <a href="/claims">MetLife</a>
                    </div>
                    <ul className="navbar-nav ml-auto list-unstyled">
                        <li className="nav-item active navbar-center">
                            <label class='font-header'>Claim Management System</label>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto list-unstyled">
                        <li className="nav-item active">
                            <span class="glyphicon glyphicon-user"></span><label>Help</label>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

Navbar.propTypes = {};

export default Navbar;
