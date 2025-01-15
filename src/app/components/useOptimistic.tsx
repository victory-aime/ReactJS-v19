"use client";

import { useEffect, useOptimistic, useState, useTransition } from "react";
import { addTodo, getTodos } from "_/app/api/route";
import { Todo } from "_/app/type";
import { Form } from "./Form";

export const UseOptimisticExample = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [response, setResponse] = useState<string | null>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos);
    });
  }, []);

  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);
  async function fetchData(formData: FormData) {
    startTransition(async () => {
      try {
        setOptimisticTodos([
          ...optimisticTodos,
          {
            id: Math.random().toString(36).slice(2),
            text: formData.get("name") as string,
          },
        ]);
        await addTodo(formData.get("name") as string);
        setTodos(await getTodos());
        setResponse("Success!");
      } catch {
        setResponse("Name can't be empty or Error!");
      }
    });
  }

  return (
    <Form
      todos={optimisticTodos}
      handleSubmit={fetchData}
      isPending={isPending}
      response={response ?? ""}
    />
  );
};
