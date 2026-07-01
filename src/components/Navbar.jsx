import { useState } from "react";
import logo from "../assets/blogomain01.jpg";
import { FaChevronDown } from "react-icons/fa";

function Navbar({ setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const goToPage = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    setPortfolioOpen(false);
  };

  return (
    <header>
      <div className="nav-container">
        <nav className="brodigy-navbar">

          {/* Logo */}
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              goToPage(0);
            }}
          >
            <img src={logo} alt="Brodigy" />
          </a>

          {/* Navigation */}
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>

            {/* Home */}
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(0);
                }}
              >
                Home
              </a>
            </li>

            {/* About */}
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(1);
                }}
              >
                About
              </a>
            </li>

            {/* Membership */}
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(2);
                }}
              >
                Membership
              </a>
            </li>

           {/* Portfolio Dropdown */}
<li className="dropdown">

  <button
    type="button"
    className="dropdown-btn"
    onClick={() => setPortfolioOpen(!portfolioOpen)}
  >
    Portfolio

    <FaChevronDown
      className={
        portfolioOpen
          ? "dropdown-icon rotate"
          : "dropdown-icon"
      }
    />
  </button>

  <ul
    className={
      portfolioOpen
        ? "dropdown-menu show"
        : "dropdown-menu"
    }
  >
    {/* Club */}
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          goToPage(3);
        }}
      >
        Club
      </a>
    </li>

    {/* Community */}
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          goToPage(4);
        }}
      >
        Community
      </a>
    </li>

    {/* Blog */}
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          goToPage(5);
        }}
      >
        Blog
      </a>
    </li>

    {/* NOK */}
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          goToPage(6);
        }}
      >
        NOK
      </a>
    </li>

    {/* Subscription */}
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          goToPage(7);
        }}
      >
        Subscription
      </a>
    </li>

  </ul>

</li>

            {/* Contact */}
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(8);
                }}
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Hamburger */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;