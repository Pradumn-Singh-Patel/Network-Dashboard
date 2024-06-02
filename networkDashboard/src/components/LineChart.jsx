/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data,
    datasets: [
      {
        label: "Alerts Over Time",
        data: data.map((_, index) => index + 1),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;