import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", members: 80 },
  { month: "Feb", members: 120 },
  { month: "Mar", members: 180 },
  { month: "Apr", members: 260 },
  { month: "May", members: 320 },
  { month: "Jun", members: 410 },
  { month: "Jul", members: 520 },
];

function MembersChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="members"
          stroke="#FDBB2D"
          fill="#FDBB2D"
          fillOpacity={0.2}
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default MembersChart;