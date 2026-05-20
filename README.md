# 📊 Analytics Dashboard

A responsive analytics dashboard built with **React** and **Recharts**. Features real-time stats, interactive charts, recent orders table, and a dark/light mode toggle — built to demonstrate production-level frontend architecture.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Recharts](https://img.shields.io/badge/Recharts-2.x-22c55e?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![Context API](https://img.shields.io/badge/Context_API-Theme-8b5cf6?style=flat-square)

---

## ✨ Features

- 📈 **Line Chart** — Revenue vs Target comparison across 12 months
- 📊 **Bar Chart** — Monthly user growth visualization
- 🥧 **Pie Chart** — Sales breakdown by category with percentages
- 🃏 **Stats Cards** — Total revenue, users, orders, and churn rate with trend indicators
- 🧾 **Recent Orders Table** — Latest transactions with status badges
- 🌙 **Dark / Light Mode** — Toggle powered by React Context API
- 📱 **Responsive Layout** — Works across all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI & component architecture |
| Recharts | Line, Bar, and Pie charts |
| Context API | Global theme (dark/light) state |
| CSS-in-JS | Component-level inline styling |

---

## 📁 Project Structure

```
analytics-dashboard/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Navigation sidebar
│   │   ├── TopBar.jsx           # Header with dark mode toggle
│   │   ├── StatCard.jsx         # Reusable KPI stat card
│   │   ├── RevenueChart.jsx     # Line chart — revenue vs target
│   │   ├── UserChart.jsx        # Bar chart — user growth
│   │   ├── CategoryChart.jsx    # Pie chart — sales by category
│   │   └── RecentOrders.jsx     # Orders table with status badges
│   ├── context/
│   │   └── ThemeContext.js      # Dark/light mode global state
│   ├── data/
│   │   └── mockData.js          # All chart and table data
│   ├── App.js                   # Root layout and composition
│   ├── index.js                 # React entry point
│   └── index.css                # Global reset styles
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ThulaxanUthayakumar/analytics-dashboard.git
cd analytics-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 Pages & Sections

### Stats Row
Four KPI cards showing Total Revenue, Total Users, Total Orders, and Churn Rate — each with a percentage change indicator compared to last month.

### Revenue vs Target Chart
A dual line chart comparing actual monthly revenue against targets across the full year, with a custom tooltip formatter showing dollar values.

### Sales by Category
A donut pie chart breaking down revenue across Electronics, Clothing, Food, Books, and Other categories.

### User Growth Chart
A bar chart showing new user registrations per month with rounded bar tops and hover tooltips.

### Recent Orders Table
A styled table showing the 6 most recent orders with customer name, product, amount, and a color-coded status badge (Delivered, Processing, Shipped, Cancelled).

---

## 🔑 Key Technical Decisions

**React Context API for theming**
Dark/light mode state lives in `ThemeContext`. Any component that needs it calls `useTheme()` — no prop drilling through multiple layers. This is the correct tool for global UI state.

**Recharts for data visualization**
Recharts is built on SVG and composable by design — each chart element (axis, tooltip, legend) is its own component. It's the most widely used charting library in React production apps.

**Separated data layer**
All mock data lives in `data/mockData.js`. Swapping in a real API means only touching that file and the components that import it — nothing else changes.

**Reusable StatCard component**
The stat card accepts `label`, `value`, `change`, `up`, and `icon` as props. Adding a new KPI card means one line of data in `mockData.js` — the component handles the rest.

---

## 🌱 Future Improvements

- [ ] Connect to a real REST API or GraphQL backend
- [ ] Add date range filter that updates all charts dynamically
- [ ] Skeleton loading states while data fetches
- [ ] Export charts as PNG or PDF
- [ ] Add more chart types — area chart, scatter plot

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built by [Thulaxan Uthayakumar](https://github.com/ThulaxanUthayakumar)
