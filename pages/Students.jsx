import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] =
    useState([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("students") ||
        "[]"
    );

    setStudents(data);
  }, []);

  return (
    <div className="container">
      <h1 className="title">
        Students
      </h1>

      {students.length === 0 ? (
        <h3>
          No students added.
        </h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Present</th>
              <th>Absent</th>
            </tr>
          </thead>

          <tbody>
            {students.map(
              (student) => (
                <tr
                  key={student.id}
                >
                  <td>
                    {
                      student.rollNo
                    }
                  </td>

                  <td>
                    {
                      student.name
                    }
                  </td>

                  <td>
                    {
                      student.department
                    }
                  </td>

                  <td>
                    {
                      student.year
                    }
                  </td>

                  <td>
                    {
                      student.present
                    }
                  </td>

                  <td>
                    {
                      student.absent
                    }
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Students;