import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set proper MIME types
app.use((req, res, next) => {
  if (req.url.endsWith(".js")) {
    res.type("application/javascript");
  } else if (req.url.endsWith(".mjs")) {
    res.type("application/javascript");
  } else if (req.url.endsWith(".css")) {
    res.type("text/css");
  }
  next();
});

// Serve static files
app.use(express.static("dist"));

// Handle SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
