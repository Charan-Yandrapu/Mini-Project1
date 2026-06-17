function DashboardCards({
  students = [],
}) {
  const totalStudents =
    students.length;

  const totalPresent =
    students.reduce(
      (sum, s) =>
        sum + s.present,
      0
    );

  const totalAbsent =
    students.reduce(
      (sum, s) =>
        sum + s.absent,
      0
    );

  const totalClasses =
    totalPresent +
    totalAbsent;

  const percentage =
    totalClasses === 0
      ? 0
      : (
          (totalPresent /
            totalClasses) *
          100
        ).toFixed(1);

  return (
    <div className="cards">
      <div className="card">
        <h2>
          {totalStudents}
        </h2>
        <p>Total Students</p>
      </div>

      <div className="card">
        <h2>
          {totalPresent}
        </h2>
        <p>Total Present</p>
      </div>

      <div className="card">
        <h2>
          {totalAbsent}
        </h2>
        <p>Total Absent</p>
      </div>

      <div className="card">
        <h2>
          {percentage}%
        </h2>
        <p>
          Overall Attendance
        </p>
      </div>
    </div>
  );
}

export default DashboardCards;