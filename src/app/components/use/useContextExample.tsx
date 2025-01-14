"use client";
import { Center, Text } from "@chakra-ui/react";
import React, { Suspense, use, createContext } from "react";

const NameContext = createContext<string | null>(null);

export const UseContext = () => {
  return (
    <Suspense fallback={"isLoading...."}>
      <NameContext value={localStorage.getItem("name")}>
        <ChildName />
      </NameContext>
    </Suspense>
  );
};

const ChildName = () => {
  const value = use(NameContext);
  return (
    <Center flexDirection={"column"} gap={"20px"}>
      <Text color={"white"} fontSize={"2xl"}>
        This is a use Api example, where we are using the context to get the
        name from the local storage.
      </Text>
      <Text fontSize={"3xl"} color={"yellow"}>
        name : {value}
      </Text>
    </Center>
  );
};
