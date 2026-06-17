import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        Attendance Tracker
      </h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/reports">Reports</Link>
      </div>
    </nav>
  );
}

export default Navbar;