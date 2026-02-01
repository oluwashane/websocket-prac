import express from "express";

const app = express();
const port = 8000;

// Use JSON middleware
app.use(express.json());

// Root request
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
