import express from "express";
import cors from "cors";

const todos = [
  { id: 1, text: "Learn Vite 2" },
  { id: 2, text: "Learn React" },
];

const app = express();
app.use(cors());
app.use(express.json());
app.get("/api/todos", (req, res) => {
  setTimeout(() => {
    res.json(todos);
  }, 3000);
});

app.post("/api/todos", (req, res) => {
  setTimeout(() => {
    const body = req.body || {};
    if (!body.text || body.text.trim() === "") {
      return res
        .status(400)
        .json({ error: "Text field is required and cannot be empty" });
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
