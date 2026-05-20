import { useTheme } from "../context/ThemeContext";

export default function StatCard({ label, value, change, up, icon }) {
  const { dark } = useTheme();

  return (
    <div style={{
      background: dark ? "#1e293b" : "#ffffff",
      border: `1px solid ${dark ? "#334155" : "#e2e8f0"}`,
      borderRadius: 16,
      padding: "20px 24px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", marginBottom: 12,
      }}>
        <span style={{
          fontSize: 11, fontWeight: 700, color: "#64748b",
          textTransform: "uppercase", letterSpacing: "0.06em",
        }}>
          {label}
        </span>
        <span style={{ fontSize: 24 }}>{icon}</span>
      </div>

      <div style={{
        fontSize: 28, fontWeight: 800,
        color: dark ? "#f1f5f9" : "#1e293b",
        marginBottom: 8,
      }}>
        {value}
      </div>

      <div style={{
        fontSize: 13, fontWeight: 600,
        color: up ? "#22c55e" : "#ef4444",
        display: "flex", alignItems: "center", gap: 4,
      }}>
        {up ? "▲" : "▼"} {change} vs last month
      </div>
    </div>
  );
}