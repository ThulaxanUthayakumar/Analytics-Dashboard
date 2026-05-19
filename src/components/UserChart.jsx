import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "../context/ThemeContext";
import { userGrowthData } from "../data/mockData";

export default function UserChart() {
  const { dark } = useTheme();
  const textColor = dark ? "#94a3b8" : "#64748b";
  const gridColor = dark ? "#1e293b" : "#f1f5f9";

  return (
    <div style={{
      background: dark ? "#1e293b" : "#fff",
      border: `1px solid ${dark ? "#334155" : "#e2e8f0"}`,
      borderRadius: 16, padding: "24px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    }}>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: dark ? "#f1f5f9" : "#1e293b", margin: "0 0 4px" }}>
          User Growth
        </h3>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>New users per month</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={userGrowthData}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: textColor }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: textColor }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ background: dark ? "#0f172a" : "#fff", border: `1px solid ${dark ? "#334155" : "#e2e8f0"}`, borderRadius: 10, fontSize: 13 }}
          />
          <Bar dataKey="users" fill="#8b5cf6" radius={[6, 6, 0, 0]} name="Users" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}