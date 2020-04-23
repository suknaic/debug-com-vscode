import express from "express";
import { getUser, addUser } from "./repositories/UserRepository";

const app = express();

app.get("/", (req, res) => {
  const users = getUser();
  return res.json({ users });
});

app.listen(8000);
