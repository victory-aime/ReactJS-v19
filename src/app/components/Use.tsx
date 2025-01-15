"use client";
import { Suspense, use } from "react";
import { getJsonName } from "../api/route";
import { Spinner, Text } from "@chakra-ui/react";

function NameDisplay({ name }: any) {
  const getName: string = use(name);
  return (
    <Text color={"white"} fontSize={"3xl"}>
      Name : {getName}
    </Text>
  );
}

export const UseDemo = () => {
  const name = getJsonName();
  return (
    <Suspense fallback={<Spinner color="white" />}>
      <NameDisplay name={name} />
    </Suspense>
  );
};
