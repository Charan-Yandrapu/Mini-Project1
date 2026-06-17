import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] =
    useState("");
  const [year, setYear] =
    useState("");

  const handleSubmit = () => {
    if (
      !name ||
      !rollNo ||
      !department ||
      !year
    )
      return;

    const newStudent = {
      id: Date.now(),
      name,
      rollNo,
      department,
      year,
      present: 0,
      absent: 0,
    };

    addStudent(newStudent);

    setName("");
    setRollNo("");
    setDepartment("");
    setYear("");
  };

  return (
    <div className="form">
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Roll Number"
        value={rollNo}
        onChange={(e) =>
          setRollNo(
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) =>
          setDepartment(
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) =>
          setYear(e.target.value)
        }
      />

      <br />
      <br />

      <button
        onClick={
          handleSubmit
        }
      >
        Add Student
      </button>

      <hr />
    </div>
  );
}

export default StudentForm;