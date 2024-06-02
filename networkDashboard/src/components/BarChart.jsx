/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const severityCounts = data.reduce((acc, severity) => {
    acc[severity] = (acc[severity] || 0) + 1;
    return acc;
  }, {});
  const chartData = {
    labels: Object.keys(severityCounts),
    datasets: [
      {
        label: "Alert Categories",
        data: Object.values(severityCounts),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};


export default BarChart;