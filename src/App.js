import React, { useState } from "react";

export default function XLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setMessage("Please enter both username and password.");
      return;
    }

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
      setIsLoggedIn(true); 
    } else {
      setMessage("Invalid username or password");
      setIsLoggedIn(false);
    }
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "10px",
        fontSize: "18px",
      }}
    >
      <h1>Login User</h1>

      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
      )}

      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
            </label>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
            </label>
          </div>

          <button
            type="submit"
            style={{
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
