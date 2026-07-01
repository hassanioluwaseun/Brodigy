import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BsShieldLock,
  BsEye,
  BsEyeSlash,
} from "react-icons/bs";

import "../../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // Temporary Authentication
    navigate("/dashboard");

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">

          <BsShieldLock />

        </div>

        <h1>Brodigy Admin</h1>

        <p>
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="admin@brodigy.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <div className="password-input">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <BsEye />
                ) : (
                  <BsEyeSlash />
                )}
              </button>

            </div>

          </div>

          <button
            className="login-btn"
            type="submit"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default Login;