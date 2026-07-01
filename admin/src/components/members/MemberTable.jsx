import { useState } from "react";

import members from "../../data/members";

import MemberRow from "./MemberRow";
import MemberDetailsDrawer from "./MemberDetailsDrawer";

function MemberTable() {

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>

      <div className="member-table-card">

        <table className="member-table">

          <thead>

            <tr>

              <th>Member</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Date Joined</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {members.map((member) => (

              <MemberRow
                key={member.id}
                member={member}
                onView={() => setSelectedMember(member)}
              />

            ))}

          </tbody>

        </table>

      </div>

      <MemberDetailsDrawer
        member={selectedMember}
        open={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
      />

    </>
  );
}

export default MemberTable;