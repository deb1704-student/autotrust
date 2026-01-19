import { useState } from "react";
import { loginUser } from "../services/api";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await loginUser({ email, password });
    if (res.token) {
      localStorage.setItem("token", res.token);
      alert("Login successful");
      window.location.href = "/automation";
    } else {
      alert(res.message);
    }
  };

  return (
  <div style={{ maxWidth: "400px", margin: "100px auto", textAlign: "center" }}>
    <h1>🔐 AutoTrust</h1>
    <p>Secure Authentication & Automation</p>

    <input
      placeholder="Email"
      style={{ width: "100%", marginBottom: "10px" }}
      onChange={e => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      style={{ width: "100%", marginBottom: "10px" }}
      onChange={e => setPassword(e.target.value)}
    />

    <button onClick={login} style={{ width: "100%" }}>
      Login
    </button>

    <p>
      New user? <a href="/register">Register</a>
    </p>
  </div>
);

}
