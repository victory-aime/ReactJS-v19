"use client";
import { Suspense, use } from "react";
import { getTodos } from "../../api/route";

const Child = () => {
  const value = use(getTodos());
  return (
    <div>
      <ul>
        {value?.map((todo: { id: string; text: string }) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export const UseDemo = () => {
  return (
    <div>
      <Suspense fallback={"isLoading...."}>
        <Child />
      </Suspense>
    </div>
  );
};
