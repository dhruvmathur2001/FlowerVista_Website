import React, { useState } from "react";
import logo from "../assets/Images/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // This is where you would handle form submission logic (e.g., API calls)
  };

  return (
    <div className="login-bg">
      <div className="text-center mt-5">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img src={logo} className="img-fluid" alt="FlowerVista Logo" height="45px" width="45px" />
          <span className="ms-2 brandtext text-dark">FlowerVista</span>
        </a>
      </div>
      <div className="container-fluid my-5 d-flex justify-content-center">
        <div className="formcontainer px-4 py-4 border border-dark rounded">
          <h3 className="text-center my-3">Login</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email ID</label>
              <input
                type="email"
                className="form-control input-specs"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control input-specs"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-4">Login</button>
            <div className="text-center">
              Don't have an account? <a href="/signup">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
