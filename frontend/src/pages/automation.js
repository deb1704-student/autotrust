import { useEffect, useState } from "react";
import WorkflowBuilder from "../components/WorkflowBuilder";
import { runAutomation } from "../services/api";

export default function Automation() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/";
  }, []);

  const saveWorkflow = async (blocks) => {
  const token = localStorage.getItem("token");

  const conditions = blocks.filter(b => b.type === "condition").map(b => b.label);
  const actions = blocks.filter(b => b.type === "action").map(b => b.label);

  const res = await runAutomation(
    { conditions, actions },
    token
  );

  setResult(JSON.stringify(res, null, 2));
};


  return (
    <div style={{ padding: 40 }}>
      <h1>⚙️ Automation Dashboard</h1>
      <p>Build automations visually — no code required.</p>

      <WorkflowBuilder onSave={saveWorkflow} />

      <pre style={{ marginTop: 20 }}>{result}</pre>
    </div>
  );
}
