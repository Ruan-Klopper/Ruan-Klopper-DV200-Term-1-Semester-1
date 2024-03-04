import React from "react";

import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-light bg-transparent">
        <div class="navLeft">
          <a class="navbar-brand" href="#">
            <h3 style={{ fontSize: "20px", marginTop: "5px" }}>Palatify</h3>
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/compare">
                  Compare
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/timeline">
                  Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
