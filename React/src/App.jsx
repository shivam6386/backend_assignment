import { useState } from "react";
import { login } from "./api";

export default function App() {
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    const data = await login("test@test.com", "password");
    setToken(data.token);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {!token ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <p>JWT Authenticated ✅</p>
      )}
    </div>
  );
}
