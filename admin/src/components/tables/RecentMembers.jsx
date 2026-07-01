const members = [
  {
    name: "John Doe",
    email: "john@email.com",
    joined: "12 Jun 2026",
  },
  {
    name: "Michael James",
    email: "michael@email.com",
    joined: "15 Jun 2026",
  },
  {
    name: "David Emmanuel",
    email: "david@email.com",
    joined: "18 Jun 2026",
  },
];

function RecentMembers() {
  return (
    <table className="dashboard-table">

      <thead>

        <tr>

          <th>Name</th>
          <th>Email</th>
          <th>Date Joined</th>

        </tr>

      </thead>

      <tbody>

        {members.map((member, index) => (

          <tr key={index}>

            <td>{member.name}</td>

            <td>{member.email}</td>

            <td>{member.joined}</td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default RecentMembers;