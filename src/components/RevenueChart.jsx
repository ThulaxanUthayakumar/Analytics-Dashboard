import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { useTheme } from "../context/ThemeContext";
import { revenueData } from "../data/mockData";

export default function RevenueChart() {
  const { dark } = useTheme();
  const text  = dark ? "#94a3b8" : "#64748b";
  const grid  = dark ? "#1e293b" : "#f1f5f9";
  const cardBg = dark ? "#1e293b" : "#ffffff";
  const border = dark ? "#334155" : "#e2e8f0";
  const ttBg   = dark ? "#0f172a" : "#ffffff";

  return (
    <div style={{
      background: cardBg, border: `1px solid ${border}`,
      borderRadius: 16, padding: 24,
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: dark ? "#f1f5f9" : "#1e293b", margin: "0 0 4px" }}>
          Revenue vs Target
        </h3>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Monthly performance overview</p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke={grid} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: text }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: text }} axisLine={false} tickLine={false}
            tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip
            contentStyle={{ background: ttBg, border: `1px solid ${border}`, borderRadius: 10, fontSize: 13 }}
            formatter={(v) => [`$${v.toLocaleString()}`, ""]}
          />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2.5}
            dot={{ r: 4, fill: "#3b82f6" }} name="Revenue" />
          <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2}
            strokeDasharray="5 5" dot={false} name="Target" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}