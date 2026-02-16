import { useState } from "react";

function Signup() {
  const [inputValues, setInputValues] = useState({
    email: "",
    username: "",
    password: "",
    confirm: "",
  });
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={inputValues.email}
        onChange={(e) => setInputValues({ ...inputValues, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Username"
        value={inputValues.username}
        onChange={(e) => setInputValues({ ...inputValues, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={inputValues.password}
        onChange={(e) => setInputValues({ ...inputValues, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={inputValues.confirm}
        onChange={(e) => setInputValues({ ...inputValues, confirm: e.target.value })}
      />
      <button type="submit">Sign up</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Signup;
