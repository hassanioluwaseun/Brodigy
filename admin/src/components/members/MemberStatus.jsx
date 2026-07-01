function MemberStatus({ status }) {
  return (
    <span className={`member-status ${status.toLowerCase()}`}>
      {status}
    </span>
  );
}

export default MemberStatus;