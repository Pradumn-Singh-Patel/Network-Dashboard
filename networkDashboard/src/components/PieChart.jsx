
import { Pie } from "react-chartjs-2";
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

const PieChart = ({ data }) => {
  const categoryCounts = data.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Severity Distribution",
        data: Object.values(categoryCounts),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;