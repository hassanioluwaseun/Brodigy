import "../../styles/MetricCard.css";

function MetricCard({
  title,
  value,
  change,
  icon,
}) {
  return (
    <div className="metric-card">

      <div className="metric-top">

        <div className="metric-icon">

          {icon}

        </div>

        <span className="metric-change">

          {change}

        </span>

      </div>

      <small>{title}</small>

      <h2>{value}</h2>

    </div>
  );
}

export default MetricCard;