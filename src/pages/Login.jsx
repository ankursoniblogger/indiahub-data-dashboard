import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && pass) {
      navigate("/dashboard");
    } else {
      alert("Enter email and password");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#e9e9e9"
    }}>
      <div style={{
        width: "350px",
        padding: "25px",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 0 10px #ccc"
      }}>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button onClick={handleLogin} className="btn" style={{ width: "100%" }}>
          Login
        </button>
      </div>
    </div>
  );
}
