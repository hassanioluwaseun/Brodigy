import { useState } from "react";
import "../styles/Membership.css";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Membership({ setCurrentPage }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="page membership-page">

      <div className="membership-container">

        <span className="membership-tag">
          BRODIGY
        </span>

        <h1>Member Portal</h1>

        <div className="membership-line"></div>

        <p className="membership-intro">
          Sign in to access your Brodigy profile, member directory,
          opportunities, and exclusive community resources.
        </p>

        <form
          className="membership-form"
          onSubmit={(e) => e.preventDefault()}
        >

          {/* Email */}

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />

          </div>

          {/* Password */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-box">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEye />
                ) : (
                  <FaRegEyeSlash />
                )}
              </span>

            </div>

          </div>

          {/* Remember */}

          <div className="remember-box">

            <input
              type="checkbox"
              id="remember"
            />

            <label htmlFor="remember">
              Remember Me
            </label>

          </div>

          {/* Buttons */}

          <div className="membership-buttons">

            <button
              type="button"
              className="signin-btn"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdk9_iSWZk4jHUcLAMpS4k9Al_5JfsaGdtrms7Z30HH3D-qqg/viewform?usp=publish-editor",
                  "_blank"
                )
              }
            >
              Sign In
            </button>

           <button
  type="button"
  className="apply-btn"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdk9_iSWZk4jHUcLAMpS4k9Al_5JfsaGdtrms7Z30HH3D-qqg/viewform?usp=publish-editor", "_blank")}
>
  Apply For Membership
</button>

          </div>

        </form>

      </div>

    </section>
  );
}

export default Membership;