const requests = [
  {
    name: "Daniel Johnson",
    status: "Pending",
  },
  {
    name: "Samuel Peter",
    status: "Approved",
  },
  {
    name: "Victor Paul",
    status: "Pending",
  },
];

function RecentRequests() {
  return (
    <div>

      {requests.map((request, index) => (

        <div
          key={index}
          className="request-item"
        >

          <div>

            <strong>{request.name}</strong>

            <small>
              Membership Request
            </small>

          </div>

          <span
            className={`request-status ${request.status.toLowerCase()}`}
          >
            {request.status}
          </span>

        </div>

      ))}

    </div>
  );
}

export default RecentRequests;