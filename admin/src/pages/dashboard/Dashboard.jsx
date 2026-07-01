import {
  BsPeople,
  BsPersonCheck,
  BsFileText,
  BsCreditCard,
} from "react-icons/bs";

import MetricCard from "../../components/cards/MetricCard";
import MembersChart from "../../components/charts/MembersChart";
import RecentMembers from "../../components/tables/RecentMembers";
import RecentRequests from "../../components/tables/RecentRequests";

import "../../styles/dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard-page">

      <div className="dashboard-header">

        <div>

          <h1>Dashboard</h1>

          <p>
            Welcome back. Here's an overview of your Brodigy platform.
          </p>

        </div>

      </div>

      <div className="metrics-grid">

        <MetricCard
          title="Total Members"
          value="1,284"
          change="+12%"
          icon={<BsPeople />}
        />

        <MetricCard
          title="Pending Requests"
          value="32"
          change="+5"
          icon={<BsPersonCheck />}
        />

        <MetricCard
          title="Total Posts"
          value="186"
          change="+18%"
          icon={<BsFileText />}
        />

        <MetricCard
          title="Subscriptions"
          value="₦425,000"
          change="+22%"
          icon={<BsCreditCard />}
        />

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card chart-card">

          <h3>Membership Growth</h3>

          <MembersChart />

        </div>

        <div className="dashboard-card">

          <h3>Recent Requests</h3>

          <RecentRequests />

        </div>

      </div>

      <div className="dashboard-card">

        <h3>Newest Members</h3>

        <RecentMembers />

      </div>

    </section>
  );
}

export default Dashboard;