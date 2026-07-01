import {
  BsBell,
  BsSearch,
  BsPersonCircle,
  BsList,
  BsChatDots,
  BsChevronDown,
} from "react-icons/bs";

function Topbar({
  mobileOpen,
  setMobileOpen,
}) {
  return (
    <header className="topbar">

      <div className="topbar-left">

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <BsList />
        </button>

        <div className="search-box">

          <BsSearch />

          <input
            type="text"
            placeholder="Search members, requests, posts..."
          />

        </div>

      </div>

      <div className="topbar-right">

        <button className="icon-btn">

          <BsChatDots />

          <span className="badge">2</span>

        </button>

        <button className="icon-btn">

          <BsBell />

          <span className="badge">5</span>

        </button>

        <div className="profile-box">

          <BsPersonCircle className="profile-icon" />

          <div className="profile-text">

            <h5>Administrator</h5>

            <span>Super Admin</span>

          </div>

          <BsChevronDown />

        </div>

      </div>

    </header>
  );
}

export default Topbar;