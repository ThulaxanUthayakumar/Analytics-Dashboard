import { useTheme } from "../context/ThemeContext";
import { recentOrders } from "../data/mockData";

const STATUS_STYLES = {
  Delivered: { background: "#dcfce7", color: "#16a34a" },
  Processing: { background: "#dbeafe", color: "#2563eb" },
  Shipped: { background: "#fef3c7", color: "#d97706" },
  Cancelled: { background: "#fee2e2", color: "#dc2626" },
};

export default function RecentOrders() {
  const { dark } = useTheme();

  return (
    <div style={{
      background: dark ? "#1e293b" : "#fff",
      border: `1px solid ${dark ? "#334155" : "#e2e8f0"}`,
      borderRadius: 16, padding: "24px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: dark ? "#f1f5f9" : "#1e293b", margin: "0 0 4px" }}>Recent Orders</h3>
          <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Latest transactions</p>
        </div>
        <button style={{ fontSize: 13, fontWeight: 600, color: "#3b82f6", background: "none", border: "none", cursor: "pointer" }}>
          View All →
        </button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${dark ? "#334155" : "#f1f5f9"}` }}>
              {["Order ID", "Customer", "Product", "Amount", "Status", "Date"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "10px 14px", fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, i) => (
              <tr
                key={order.id}
                style={{ borderBottom: i < recentOrders.length - 1 ? `1px solid ${dark ? "#1e293b" : "#f8fafc"}` : "none" }}
              >
                <td style={{ padding: "12px 14px", color: "#3b82f6", fontWeight: 600 }}>{order.id}</td>
                <td style={{ padding: "12px 14px", color: dark ? "#cbd5e1" : "#1e293b", fontWeight: 500 }}>{order.customer}</td>
                <td style={{ padding: "12px 14px", color: "#64748b" }}>{order.product}</td>
                <td style={{ padding: "12px 14px", color: dark ? "#f1f5f9" : "#1e293b", fontWeight: 600 }}>${order.amount.toLocaleString()}</td>
                <td style={{ padding: "12px 14px" }}>
                  <span style={{ ...STATUS_STYLES[order.status], fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>
                    {order.status}
                  </span>
                </td>
                <td style={{ padding: "12px 14px", color: "#94a3b8" }}>
                  {new Date(order.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}