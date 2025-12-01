import React, { useState } from "react";

export default function XLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setMessage("Please enter both username and password.");
      return;
    }

    if (username === "user" && password === "password") {
      setMessage("Welcome, user");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div style={{ width: "300px", margin: "10px", fontSize: "18px" }}>
      <h1>Login Page</h1>

      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px", display:'flex' }}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px", display:"flex" }}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
