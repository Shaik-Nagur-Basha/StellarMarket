import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const __dirname = path.resolve();

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
