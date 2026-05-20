import { useTheme } from "../context/ThemeContext";

export default function TopBar() {
  const { dark, toggle } = useTheme();

  const bg     = dark ? "#0d1b2e" : "#ffffff";
  const border = dark ? "#1e293b" : "#e2e8f0";
  const title  = dark ? "#f1f5f9" : "#1e293b";
  const tagBg  = dark ? "#1e293b" : "#f8fafc";

  return (
    <div style={{
      display: "flex", alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 28px",
      borderBottom: `1px solid ${border}`,
      background: bg,
      position: "sticky", top: 0, zIndex: 40,
    }}>

      <div>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: title, margin: 0 }}>
          Dashboard Overview
        </h1>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
          Welcome back, Thulaxan 👋
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{
          fontSize: 13, color: "#64748b",
          background: tagBg, padding: "7px 14px",
          borderRadius: 8, border: `1px solid ${border}`,
        }}>
          📅 {new Date().toLocaleDateString("en-GB", {
            day: "numeric", month: "short", year: "numeric",
          })}
        </span>

        <button
          onClick={toggle}
          style={{
            background: tagBg,
            border: `1px solid ${border}`,
            borderRadius: 8, padding: "7px 14px",
            cursor: "pointer", fontSize: 18,
            lineHeight: 1,
          }}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}