import { useState } from "react";

function Login() {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputValues),
      });
      const data = await res.json();
      setMessage(data.message || "Logged in successfully");
    } catch (err) {
      setMessage("Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={inputValues.email}
        onChange={(e) => setInputValues({ ...inputValues, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={inputValues.password}
        onChange={(e) => setInputValues({ ...inputValues, password: e.target.value })}
      />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Login;
