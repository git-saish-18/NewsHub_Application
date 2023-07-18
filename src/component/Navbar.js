import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Newsitem.css";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${
          props.Mode === "Dark Mode" ? "light" : "dark"
        } text-${props.Mode === "Dark Mode" ? "dark" : "light"}`}
      >
        <div className="container-fluid">
          <h3
            className={`navbar-brand text-${
              props.Mode === "Dark Mode" ? "dark" : "light"
            }`}
          >
            News_Hub
          </h3>
          <button
            style={{ color: "red" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">⬇️</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.Mode === "Dark Mode" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.Mode === "Dark Mode" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/cric"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.Mode === "Dark Mode" ? "dark" : "light"
                  }`}
                  to="/film"
                >
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.Mode === "Dark Mode" ? "dark" : "light"
                  }`}
                  to="/tech"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.Mode === "Dark Mode" ? "dark" : "light"
                  }`}
                  to="/busi"
                >
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.Mode === "Dark Mode" ? "dark" : "light"
                  }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.Mode === "Dark Mode" ? "dark" : "light"
                  }`}
                  to="/sci"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    props.Mode === "Dark Mode" ? "dark" : "light"
                  }`}
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
            <div
              className="form-check form-switch"
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.change}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.Mode}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

