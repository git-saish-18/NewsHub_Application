import React from "react";
export default function Login(props) {
  return (
    <div>
      <form className="container my-4">
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className={`form-label text-${
              props.Mode === "Dark Mode" ? "dark" : "light"
            }`}
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div style={{ color: "red" }} id="emailHelp">
            We'll never share your email with anyone else.
          </div>
        </div>
        <label htmlFor="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            htmlFor="exampleCheck1"
            className={`form-label text-${
              props.Mode === "Dark Mode" ? "dark" : "light"
            }`}
          >
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
}
