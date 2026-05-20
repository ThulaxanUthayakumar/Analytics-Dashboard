import { useTheme } from "../context/ThemeContext";

const NAV = [
  { icon: "📊", label: "Dashboard", active: true },
  { icon: "👥", label: "Users" },
  { icon: "📦", label: "Orders" },
  { icon: "🛍️", label: "Products" },
  { icon: "📈", label: "Analytics" },
  { icon: "⚙️", label: "Settings" },
];

export default function Sidebar() {
  const { dark } = useTheme();

  const bg = dark ? "#0d1b2e" : "#1e293b";
  const border = dark ? "#1e3a5f" : "#334155";

  return (
    <aside style={{
      width: 220,
      flexShrink: 0,
      minHeight: "100vh",
      background: bg,
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      top: 0,
      alignSelf: "flex-start",
    }}>

      {/* Logo */}
      <div style={{ padding: "24px 20px", borderBottom: `1px solid ${border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 18,
          }}>
            📊
          </div>
          <span style={{
            fontSize: 18, fontWeight: 800,
            color: "#fff", letterSpacing: "-0.02em",
          }}>
            Analytica
          </span>
        </div>
      </div>

      {/* Nav Links */}
      <nav style={{ padding: "16px 12px", flex: 1 }}>
        <p style={{
          fontSize: 10, fontWeight: 700, color: "#475569",
          textTransform: "uppercase", letterSpacing: "0.08em",
          padding: "0 8px", marginBottom: 8,
        }}>
          Main Menu
        </p>

        {NAV.map(({ icon, label, active }) => (
          <div
            key={label}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px", borderRadius: 10, marginBottom: 4,
              background: active ? "#3b82f620" : "transparent",
              color: active ? "#3b82f6" : "#94a3b8",
              cursor: "pointer", fontSize: 14,
              fontWeight: active ? 700 : 500,
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: 16 }}>{icon}</span>
            {label}
          </div>
        ))}
      </nav>

      {/* Bottom User */}
      <div style={{
        padding: "16px 20px",
        borderTop: `1px solid ${border}`,
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: "50%",
          background: "#3b82f6",
          display: "flex", alignItems: "center",
          justifyContent: "center",
          fontSize: 13, fontWeight: 700, color: "#fff",
        }}>
          TU
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9", margin: 0 }}>Thulaxan</p>
          <p style={{ fontSize: 11, color: "#64748b", margin: 0 }}>Admin</p>
        </div>
      </div>
    </aside>
  );
}