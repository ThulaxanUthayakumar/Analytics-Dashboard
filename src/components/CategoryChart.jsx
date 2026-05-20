import {
  PieChart, Pie, Cell,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { useTheme } from "../context/ThemeContext";
import { categoryData } from "../data/mockData";

export default function CategoryChart() {
  const { dark } = useTheme();
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
          Sales by Category
        </h3>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Revenue distribution</p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%" cy="50%"
            innerRadius={70} outerRadius={110}
            paddingAngle={3} dataKey="value"
          >
            {categoryData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ background: ttBg, border: `1px solid ${border}`, borderRadius: 10, fontSize: 13 }}
            formatter={(v) => [`${v}%`, ""]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}