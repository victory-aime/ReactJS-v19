export function fakeApiCall(input: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === "error" || input.trim() === "") {
        reject(new Error("Name cannot be empty"));
      } else {
        localStorage.setItem("name", input);
        resolve(`Message reçu: ${input}`);
      }
    }, 2000);
  });
}

export async function getTodos() {
  const response = await fetch("http://localhost:8080/api/todos");
  return await response.json();
}

export async function addTodo(text: string) {
  console.log(text);
  const response = await fetch("http://localhost:8080/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) throw new Error("Failed to add todo");
  return await response.json();
}

export async function removeTodo(text: string) {
  const response = await fetch("http://localhost:8080/api/todos/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) throw new Error("Failed to delete todo");
  return await response.json();
}
