import { useState, useEffect } from "react";
import { runAutomation } from "../services/api";

export default function Automation() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/";
  }, []);

  const trigger = async () => {
    const token = localStorage.getItem("token");
    const res = await runAutomation(
      { condition: "salary>50000", action: "Generate Rent Receipt" },
      token
    );
    setResult(JSON.stringify(res));
  };

  return (
  <div style={{ padding: "40px" }}>
    <h1>⚙️ Automation Dashboard</h1>
    <p>Trigger secure automated actions with audit proof.</p>

    <button onClick={trigger}>Run Automation</button>

    <pre style={{ marginTop: "20px" }}>{result}</pre>
  </div>
);

}
