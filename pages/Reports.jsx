import { useEffect, useState } from "react";

function Reports() {
  const [students, setStudents] =
    useState([]);

  useEffect(() => {
    const data =
      JSON.parse(
        localStorage.getItem(
          "students"
        )
      ) || [];

    setStudents(data);
  }, []);

  return (
    <div className="container">
      <h1>Attendance Report</h1>

      {students.map((s) => {
        const total =
          s.present + s.absent;

        const percentage =
          total === 0
            ? 0
            : (
                (s.present /
                  total) *
                100
              ).toFixed(1);

        return (
          <div key={s.id}>
            <h3>{s.name}</h3>
            <p>
              Attendance:
              {percentage}%
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Reports;