import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use(express.static(path.join(__dirname, "/client")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});
