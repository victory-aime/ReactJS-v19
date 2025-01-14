"use client";
import { Suspense, use } from "react";
import { getTodos } from "../../api/route";
import { UnorderedList, ListItem } from "@chakra-ui/react";

const Child = ({ value }: { value: { id: string; text: string }[] }) => {
  return (
    <UnorderedList>
      {value?.map((todo: { id: string; text: string }) => (
        <ListItem color={"white"} fontSize={"2xl"}>
          {todo?.text}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export const UseDemo = () => {
  const value = use(getTodos());
  return (
    <Suspense fallback={"isLoading...."}>
      <Child value={value} />
    </Suspense>
  );
};
