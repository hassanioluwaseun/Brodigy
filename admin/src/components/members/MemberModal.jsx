import { FiX } from "react-icons/fi";

import "../../styles/member-modal.css";

import MemberWizard from "./member-form/MemberWizard";

function MemberModal({
  open,
  onClose,
  title = "Add New Member",
}) {

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="modal-overlay"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="member-modal">

        {/* Header */}
        <div className="modal-header">

          <div>

            <h2>{title}</h2>

            <p>
              Complete the member registration process.
            </p>

          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <FiX />
          </button>

        </div>

        {/* Wizard */}
        <div className="modal-body">

          <MemberWizard />

        </div>

      </div>
    </>
  );
}

export default MemberModal;