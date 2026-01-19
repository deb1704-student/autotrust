import { useState } from "react";
import { registerUser } from "../services/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await registerUser({ email, password });
    alert(res.message);
  };

  return (
    <div>
      <h1>Register</h1>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}
