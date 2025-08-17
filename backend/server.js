const express = require("express");
const cors = require("cors");
const { connectDB, sql } = require("./db"); // import db.js

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// --------------------
// Test Route
// --------------------
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// --------------------
// Products CRUD
// --------------------

// CREATE
app.post("/api/products", async (req, res) => {
  const { name, price } = req.body;
  try {
    await sql.query`INSERT INTO Products (name, price) VALUES (${name}, ${price})`;
    res.send("Product created ✅");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// READ
app.get("/api/products", async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Products`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// UPDATE
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await sql.query`UPDATE Products SET name=${name}, price=${price} WHERE id=${id}`;
    res.send("Product updated ✅");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await sql.query`DELETE FROM Products WHERE id=${id}`;
    res.send("Product deleted ✅");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// --------------------
// Items, Employees, Routes (Read-only)
// --------------------

app.get("/api/items", async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Items`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send("❌ Database query failed");
  }
});

app.get("/api/employees", async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Employees`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send("❌ Database query failed");
  }
});

app.get("/api/routes", async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Routes`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send("❌ Database query failed");
  }
});

// --------------------
// Start Server
// --------------------
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
