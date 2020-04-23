import express from "express";
import { getUser, addUser } from "./repositories/UserRepository";

const app = express();

app.get("/", (req, res) => {
  const users = getUser();

  console.log("chegou aqui usuario");
  console.log(users);
  return res.json({ users });
});

app.listen(8000);
