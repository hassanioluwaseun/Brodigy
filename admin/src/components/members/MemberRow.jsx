import {
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

import MemberAvatar from "./MemberAvatar";
import MemberStatus from "./MemberStatus";

function MemberRow({
  member,
  onView,
}) {
  return (
    <tr>

      <td>

        <div className="member-info">

          <MemberAvatar name={member.name} />

          <div>

            <strong>{member.name}</strong>

            <small>{member.occupation}</small>

          </div>

        </div>

      </td>

      <td>{member.email}</td>

      <td>{member.phone}</td>

      <td>{member.joined}</td>

      <td>

        <MemberStatus status={member.status} />

      </td>

      <td>

        <div className="table-actions">

          <button
            onClick={onView}
            title="View Member"
          >
            <FiEye />
          </button>

          <button
            title="Edit Member"
          >
            <FiEdit />
          </button>

          <button
            className="delete"
            title="Delete Member"
          >
            <FiTrash2 />
          </button>

        </div>

      </td>

    </tr>
  );
}

export default MemberRow;