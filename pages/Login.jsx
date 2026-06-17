import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim()) return;

    localStorage.setItem("user", username);
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login-card">
        <h1>Attendance Tracker</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;