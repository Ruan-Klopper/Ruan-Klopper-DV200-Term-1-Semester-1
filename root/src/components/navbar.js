import React from "react";

import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ webPage }) => {
  return (
    <div className="navbar-fixed">
      <nav className="navbar navbar-expand navbar-light bg-transparent">
        <div className="navLeft">
          <div className="navDot"></div>
          <a className="navbar-brand" href="#">
            <h3
              style={{ fontSize: "20px", marginTop: "5px", color: "#b42828" }}
            >
              Palatify
            </h3>
          </a>
          <div className="navDot"></div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  style={{ color: "#b42828" }}
                  className={
                    webPage === "Dashboard" ? "nav-link active" : "nav-link"
                  }
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "#b42828" }}
                  className={
                    webPage === "Compare" ? "nav-link active" : "nav-link"
                  }
                  to="/compare"
                >
                  Compare
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "#b42828" }}
                  className={
                    webPage === "Timeline" ? "nav-link active" : "nav-link"
                  }
                  to="/timeline"
                >
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
