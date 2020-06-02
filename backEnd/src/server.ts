import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>teste</h1>");
});

app.listen(3333);
