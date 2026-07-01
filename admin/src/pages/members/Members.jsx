import { useState } from "react";

import {
  FiSearch,
  FiDownload,
  FiPlus,
} from "react-icons/fi";

import "../../styles/members.css";
import "../../styles/member-table.css";

import MemberTable from "../../components/members/MemberTable";
import MemberModal from "../../components/members/MemberModal";

function Members() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="members-page">

      {/* =========================
            PAGE HEADER
      ========================== */}

      <div className="members-header">

        <div>

          <h1>Members</h1>

          <p>
            Manage all registered Brodigy members from one centralized dashboard.
          </p>

        </div>

        <div className="members-buttons">

          <button className="export-btn">

            <FiDownload />

            Export

          </button>

          <button
            className="add-btn"
            onClick={() => setOpenModal(true)}
          >

            <FiPlus />

            Add Member

          </button>

        </div>

      </div>

      {/* =========================
            STATISTICS
      ========================== */}

      <div className="members-stats">

        <div className="member-stat-card">

          <small>Total Members</small>

          <h2>1,284</h2>

        </div>

        <div className="member-stat-card">

          <small>Active Members</small>

          <h2>1,102</h2>

        </div>

        <div className="member-stat-card">

          <small>Pending Approval</small>

          <h2>58</h2>

        </div>

        <div className="member-stat-card">

          <small>Suspended</small>

          <h2>24</h2>

        </div>

      </div>

      {/* =========================
            TOOLBAR
      ========================== */}

      <div className="members-toolbar">

        <div className="member-search">

          <FiSearch />

          <input
            type="text"
            placeholder="Search by name, email, phone..."
          />

        </div>

      </div>

      {/* =========================
            MEMBERS TABLE
      ========================== */}

      <MemberTable />

      {/* =========================
            ADD MEMBER MODAL
      ========================== */}

      <MemberModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Add New Member"
      />

    </section>
  );
}

export default Members;