import * as XLSX from "xlsx";

function ExportButtons({
  students
}) {
  const exportExcel = () => {
    const ws =
      XLSX.utils.json_to_sheet(
        students
      );

    const wb =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      wb,
      ws,
      "Attendance"
    );

    XLSX.writeFile(
      wb,
      "Attendance.xlsx"
    );
  };

  return (
    <button
      onClick={exportExcel}
    >
      Download Excel
    </button>
  );
}

export default ExportButtons;