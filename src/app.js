const express = require("express");
const app = express();

// ❌ Hardcoded secret (SAST should detect)
const DB_PASSWORD = "admin123";

app.use(express.json());

// ❌ SQL Injection style vulnerability
app.get("/user", (req, res) => {
  const userId = req.query.id;
  const query = "SELECT * FROM users WHERE id = " + userId;
  res.send(`Executing query: ${query}`);
});

// ❌ No input validation
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    res.send("Login successful");
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
