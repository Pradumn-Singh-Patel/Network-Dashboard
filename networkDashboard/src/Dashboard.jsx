import { useState, useEffect } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import TableData from "./components/TableData";
import { dummyData } from "./dummyData"; // assuming the JSON file is in the src directory

function Dashboard() {
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    // Process the data
    const timestamps = dummyData.map((data) => new Date(data.timestamp));
    const severities = dummyData.map((data) => data.alert.severity);
    const categories = dummyData.map((data) => data.alert.category);

    setLineChartData(timestamps);

    setBarChartData(severities);

    setPieChartData(categories);
  },[]);

  return (
    <div className="dashboard-container">
      <h1>Network Alert Dashboard</h1>
      <div className="chart-container line">
        <h3>Alerts Over Time</h3>
        <LineChart data={lineChartData} />
      </div>
      <div className="chart-container bar">
        <h3>Alert Severities</h3>
        <BarChart data={barChartData} />
      </div>
      <div className="chart-container pie">
        <h3>Alert Categories</h3>
        <PieChart data={pieChartData} />
      </div>
      <TableData rows={dummyData} />
    </div>
  );
}

export default Dashboard;