import { useTheme } from "../context/ThemeContext";

export default function TopBar() {
  const { dark, toggle } = useTheme();

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 28px", borderBottom: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
      background: dark ? "#0f172a" : "#fff",
    }}>
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: dark ? "#f1f5f9" : "#1e293b", margin: 0 }}>
          Dashboard Overview
        </h1>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Welcome back, Thulaxan 👋</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Date */}
        <span style={{ fontSize: 13, color: "#64748b", background: dark ? "#1e293b" : "#f8fafc", padding: "7px 14px", borderRadius: 8, border: `1px solid ${dark ? "#334155" : "#e2e8f0"}` }}>
          📅 {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
        </span>
        {/* Dark mode toggle */}
        <button
          onClick={toggle}
          style={{
            background: dark ? "#1e293b" : "#f1f5f9",
            border: `1px solid ${dark ? "#334155" : "#e2e8f0"}`,
            borderRadius: 8, padding: "7px 14px",
            cursor: "pointer", fontSize: 16,
          }}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}