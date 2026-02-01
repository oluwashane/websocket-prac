import express from "express";
import { matchRouter } from "./routes/matches.js";

const app = express();
const port = 8000;

// Use JSON middleware
app.use(express.json());

// Root request
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.use("/matches", matchRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
