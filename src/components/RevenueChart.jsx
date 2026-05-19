import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTheme } from "../context/ThemeContext";
import { revenueData } from "../data/mockData";

export default function RevenueChart() {
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
          Revenue vs Target
        </h3>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Monthly performance overview</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: textColor }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: textColor }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip
            contentStyle={{ background: dark ? "#0f172a" : "#fff", border: `1px solid ${dark ? "#334155" : "#e2e8f0"}`, borderRadius: 10, fontSize: 13 }}
            formatter={(value) => [`$${value.toLocaleString()}`, ""]}
          />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4, fill: "#3b82f6" }} name="Revenue" />
          <Line type="monotone" dataKey="target" stroke="#e2e8f0" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Target" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}