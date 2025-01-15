import { getTodos, addTodo } from "_/app/api/route";
import { revalidatePath } from "next/cache";
import { UnorderedList, ListItem, Flex, Box } from "@chakra-ui/react";

export async function ServerActions() {
  const todos = await getTodos();

  if (!todos) return;

  async function addTodos(value: FormData) {
    "use server";
    try {
      await addTodo(value?.get("text") as string);
      revalidatePath("/");
    } catch (error) {
      throw new Error(error as string);
    }
  }

  return (
    <form action={addTodos}>
      <Box width={"100%"}>
        {todos?.map(
          (todo: { id?: string; text?: string | null }, index: number) => (
            <UnorderedList key={index}>
              <ListItem color={"white"} fontSize={"2xl"} key={todo.id}>
                {todo?.text}
              </ListItem>
            </UnorderedList>
          )
        )}
        <Flex gap={3} marginTop={10}>
          <input
            style={{
              background: "none",
              borderRadius: 8,
              padding: 8,
              color: "white",
            }}
            name="text"
            placeholder="Enter text"
          />
          <button
            style={{
              background: "blue",
              borderRadius: 8,
              padding: 8,
              color: "white",
            }}
            type="submit"
          >
            Send
          </button>
        </Flex>
      </Box>
    </form>
  );
}
