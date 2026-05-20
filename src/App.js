import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import StatCard from "./components/StatCard";
import RevenueChart from "./components/RevenueChart";
import UserChart from "./components/UserChart";
import CategoryChart from "./components/CategoryChart";
import RecentOrders from "./components/RecentOrders";
import { stats } from "./data/mockData";

function Dashboard() {
  const { dark } = useTheme();

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: dark ? "#060d18" : "#f8fafc",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Sidebar />

      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
      }}>
        <TopBar />

        <main style={{ padding: 28, flex: 1 }}>

          {/* Stat Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 24,
          }}>
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          {/* Revenue + Category */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 16,
            marginBottom: 24,
          }}>
            <RevenueChart />
            <CategoryChart />
          </div>

          {/* User Growth */}
          <div style={{ marginBottom: 24 }}>
            <UserChart />
          </div>

          {/* Orders */}
          <RecentOrders />

        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}