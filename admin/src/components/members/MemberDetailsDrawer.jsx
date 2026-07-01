import {
  FiX,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiCalendar,
  FiEdit2,
  FiTrash2,
  FiSlash,
} from "react-icons/fi";

import "../../styles/member-modal.css";

function MemberDetailsDrawer({
  member,
  open,
  onClose,
}) {
  if (!member) return null;

  return (
    <>
      <div
        className={`drawer-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      />

      <aside
        className={`member-drawer ${open ? "open" : ""}`}
      >
        <div className="drawer-header">

          <div>

            <h2>Member Profile</h2>

            <p>Complete member information</p>

          </div>

          <button onClick={onClose}>

            <FiX />

          </button>

        </div>

        <div className="drawer-profile">

          <div className="drawer-avatar">

            {member.name
              .split(" ")
              .map((word) => word[0])
              .join("")}

          </div>

          <h3>{member.name}</h3>

          <span className={`member-status ${member.status.toLowerCase()}`}>
            {member.status}
          </span>

        </div>

        <div className="drawer-section">

          <div className="info-row">

            <FiMail />

            <span>{member.email}</span>

          </div>

          <div className="info-row">

            <FiPhone />

            <span>{member.phone}</span>

          </div>

          <div className="info-row">

            <FiBriefcase />

            <span>{member.occupation}</span>

          </div>

          <div className="info-row">

            <FiMapPin />

            <span>{member.location}</span>

          </div>

          <div className="info-row">

            <FiCalendar />

            <span>{member.joined}</span>

          </div>

        </div>

        <div className="drawer-actions">

          <button className="edit-btn">

            <FiEdit2 />

            Edit

          </button>

          <button className="suspend-btn">

            <FiSlash />

            Suspend

          </button>

          <button className="delete-btn">

            <FiTrash2 />

            Delete

          </button>

        </div>

      </aside>
    </>
  );
}

export default MemberDetailsDrawer;