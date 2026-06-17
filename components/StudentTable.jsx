function StudentTable({
  students = [],
  markAttendance,
  deleteStudent,
}) {
  return (
    <div>
      <h2>Student List</h2>

      <table
        border="1"
        cellPadding="10"
      >
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Year</th>
            <th>Present</th>
            <th>Absent</th>
            <th>%</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length ===
          0 ? (
            <tr>
              <td colSpan="8">
                No Students Added
              </td>
            </tr>
          ) : (
            students.map(
              (student) => {
                const total =
                  student.present +
                  student.absent;

                const percentage =
                  total === 0
                    ? 0
                    : (
                        (student.present /
                          total) *
                        100
                      ).toFixed(1);

                return (
                  <tr
                    key={
                      student.id
                    }
                  >
                    <td classname="actions">
                      {
                        student.rollNo
                      }
                    </td>

                    <td classname="actions">
                      {
                        student.name
                      }
                    </td>

                    <td classname="actions">
                      {
                        student.department
                      }
                    </td>

                    <td classname="actions">
                      {
                        student.year
                      }
                    </td>

                    <td classname="actions">
                      {
                        student.present
                      }
                    </td>

                    <td classname="actions">
                      {
                        student.absent
                      }
                    </td>

                    <td classname="actions">
                      {
                        percentage
                      }
                      %
                    </td>

                    <td classname="actions">
                      <button
                        onClick={() =>
                          markAttendance(
                            student.id,
                            "present"
                          )
                        }
                      >
                        Present
                      </button>

                      <button
                        onClick={() =>
                          markAttendance(
                            student.id,
                            "absent"
                          )
                        }
                      >
                        Absent
                      </button>

                      <button
                        onClick={() =>
                          deleteStudent(
                            student.id
                          )
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;