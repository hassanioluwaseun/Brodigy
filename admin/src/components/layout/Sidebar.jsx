import { NavLink } from "react-router-dom";

import {
  BsGrid1X2,
  BsPeople,
  BsPersonCheck,
  BsFileText,
  BsEnvelope,
  BsCreditCard,
  BsGraphUp,
  BsGear,
  BsChevronLeft,
  BsChevronRight,
  BsShieldCheck,
} from "react-icons/bs";

function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
}) {
  return (
    <aside
      className={`sidebar ${
        collapsed ? "collapsed" : ""
      } ${mobileOpen ? "mobile-open" : ""}`}
    >
      <div className="sidebar-header">

        <div className="brand">

          <div className="brand-logo">
            B
          </div>

          {!collapsed && (
            <div className="brand-text">
              <h2>Brodigy</h2>
              <span>Admin Portal</span>
            </div>
          )}

        </div>

        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <BsChevronRight />
          ) : (
            <BsChevronLeft />
          )}
        </button>

      </div>

      <nav className="sidebar-nav">

        <NavLink to="/dashboard">
          <BsGrid1X2 />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/members">
          <BsPeople />
          {!collapsed && <span>Members</span>}
        </NavLink>

        <NavLink to="/requests">
          <BsPersonCheck />
          {!collapsed && <span>Requests</span>}
        </NavLink>

        <NavLink to="/posts">
          <BsFileText />
          {!collapsed && <span>Posts</span>}
        </NavLink>

        <NavLink to="/inbox">
          <BsEnvelope />
          {!collapsed && <span>Inbox</span>}
        </NavLink>

        <NavLink to="/payments">
          <BsCreditCard />
          {!collapsed && <span>Payments</span>}
        </NavLink>

        <NavLink to="/analytics">
          <BsGraphUp />
          {!collapsed && <span>Analytics</span>}
        </NavLink>

        <NavLink to="/settings">
          <BsGear />
          {!collapsed && <span>Settings</span>}
        </NavLink>

      </nav>

      <div className="sidebar-footer">

        <div className="admin-avatar">
          <BsShieldCheck />
        </div>

        {!collapsed && (
          <div className="admin-info">
            <strong>Administrator</strong>
            <small>Super Admin</small>
          </div>
        )}

      </div>

    </aside>
  );
}

export default Sidebar;