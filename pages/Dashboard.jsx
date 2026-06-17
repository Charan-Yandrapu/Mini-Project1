import { useState, useEffect } from "react";
import DashboardCards from "../components/DashboardCards";
import StudentForm from "../components/StudentForm";
import SearchBar from "../components/SearchBar";
import StudentTable from "../components/StudentTable";
import "../styles/dashboard.css";

function Dashboard() {
  // Load students from localStorage when app starts
  const [students, setStudents] = useState(() => {
    const savedStudents =
      localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : [];
  });

  const [search, setSearch] =
    useState("");

  // Save to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);

  // Add Student
  const addStudent = (student) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      student,
    ]);
  };

  // Mark Attendance
  const markAttendance = (
    id,
    status
  ) => {
    setStudents((prevStudents) =>
      prevStudents.map(
        (student) => {
          if (
            student.id === id
          ) {
            return {
              ...student,

              present:
                status ===
                "present"
                  ? student.present +
                    1
                  : student.present,

              absent:
                status ===
                "absent"
                  ? student.absent +
                    1
                  : student.absent,
            };
          }

          return student;
        }
      )
    );
  };

  // Delete Student
  const deleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter(
        (student) =>
          student.id !== id
      )
    );
  };

  // Search
  const filteredStudents =
    students.filter((student) =>
      student.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="container">
      <h1 className="title">
        Student Attendance
        Dashboard
      </h1>

      <DashboardCards
        students={students}
      />

      <StudentForm
        addStudent={addStudent}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <StudentTable
        students={
          filteredStudents
        }
        markAttendance={
          markAttendance
        }
        deleteStudent={
          deleteStudent
        }
      />
    </div>
  );
}

export default Dashboard;