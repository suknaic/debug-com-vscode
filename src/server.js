import express from "express";

const app = express();

app.get("/", (req, res) => {
  const users = ["felipe", "kelyane", "isadora", "jhon"];

  return res.json(users);
});

app.listen(8000);
