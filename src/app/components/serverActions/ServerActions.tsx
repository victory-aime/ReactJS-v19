import { getTodos, addTodo } from "_/app/api/route";
import { revalidatePath } from "next/cache";

export async function ServerActions() {
  const todos = await getTodos();

  if (!todos) return;

  async function addTodos(value: FormData) {
    "use server";
    try {
      await addTodo(value?.get("text") as string);
      revalidatePath("/");
    } catch {
      console.log("Failed to add");
    }
  }

  return (
    <>
      <ul>
        {todos?.map((todo: { id: string; text: string }) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <form action={addTodos}>
        <input name="text" placeholder="Enter text" />
        <button type="submit">{"Add todo"}</button>
      </form>
    </>
  );
}
