const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`Start: ${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`End: ${req.method} ${req.url} ${diffTime}ms`);
});

const port = process.env.PORT || 8091;

app.listen(port, () => console.log("Server listening on port:", port));

app.get("/status", (req, res) => {
  res.send({
    status: "running",
  });
});
