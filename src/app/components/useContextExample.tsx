"use client";
import { Center, Spinner, Text } from "@chakra-ui/react";
import React, {
  Suspense,
  use,
  createContext,
  useState,
  useEffect,
} from "react";

const NameContext = createContext<string | null>(null);

export const UseContext = () => {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("name"));
    }
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <NameContext value={name}>
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
