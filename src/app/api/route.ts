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

export async function getTodos(): Promise<any> {
  const response = await fetch("http://localhost:8080/api/todos");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(response.json());
      } catch {
        reject(new Error("Failed to fetch todos"));
      }
    }, 3000);
  });
}

export async function getJsonName(): Promise<string> {
  try {
    const response = await fetch("http://localhost:8080/api/name");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.name);
      }, 1000);
    });
  } catch (error) {
    throw new Error("Failed to fetch name");
  }
}

export async function addTodo(
  text: string | null
): Promise<{ message: string }> {
  const response = await fetch("http://localhost:8080/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) throw new Error(" server response Failed to add todo");
  return await response.json();
}
