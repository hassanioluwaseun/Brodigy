function MemberAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="member-avatar">
      {initials}
    </div>
  );
}

export default MemberAvatar;