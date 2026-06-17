import {
  Bar
} from "react-chartjs-2";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement
);

function AttendanceChart({
  students
}) {
  const data = {
    labels: students.map(
      (s) => s.name
    ),
    datasets: [
      {
        label: "Present",
        data: students.map(
          (s) => s.present
        )
      }
    ]
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default AttendanceChart;