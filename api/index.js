import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, "/client/dist")));

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".jsx")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
