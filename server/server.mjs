import express from "express";
import cors from "cors";

const todos = [
  { id: 1, text: "Learn Vite 2" },
  { id: 2, text: "Learn React" },
  { id: 3, text: "Learn React Native" },
];

const name = {
  name: "Rajesh",
};

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/name", (req, res) => {
  res.json(name);
});

app.post("/api/todos", (req, res) => {
  setTimeout(() => {
    const body = req.body || {};
    if (!body.text || body.text.trim() === "") {
      return res.status(400).json({ error: "Name can't be empty or Error" });
    }
    const todo = {
      id: todos.length + 1,
      text: body.text.trim(),
    };
    todos.push(todo);
    res.json(todo);
  }, 3000);
});
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
