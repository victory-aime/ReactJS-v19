"use client";

import {
  Spinner,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Input,
  Flex,
  useToast,
  Box,
} from "@chakra-ui/react";
import { Suspense, useEffect } from "react";

export const Form = ({
  value,
  handleSubmit,
  isPending,
  response,
  todos,
}: {
  value?: string | null;
  todos?: { id?: string; text?: string | null }[];
  handleSubmit: (value: FormData) => void;
  isPending: boolean;
  response: string | null;
}) => {
  const toast = useToast();

  useEffect(() => {
    if (response === "Name can't be empty or Error!") {
      toast({
        title: "Error",
        description: response,
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: response,
        position: "top",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [response]);

  return (
    <Suspense fallback={<Spinner />}>
      <form action={(e) => handleSubmit(e)}>
        <Box maxW={600} mt={50}>
          {todos ? (
            <>
              {todos?.map((todo: { id?: string; text?: string | null }) => (
                <UnorderedList key={todo.id}>
                  <ListItem
                    color={isPending ? "gray.500" : "white"}
                    fontSize={"2xl"}
                  >
                    {todo?.text}
                  </ListItem>
                </UnorderedList>
              ))}
            </>
          ) : (
            <Text color={"white"} fontSize={"2xl"} fontWeight={"semibold"}>
              Name :{" "}
              <span style={{ color: isPending ? "gray" : "white" }}>
                {value}
              </span>
            </Text>
          )}
          <Flex gap={3} marginTop={10}>
            <Input
              name="name"
              placeholder="Enter name"
              disabled={isPending}
              color={"white"}
            />
            <Button
              bgColor={"blue.500"}
              color={"white"}
              isLoading={isPending}
              loadingText={"wait..."}
              spinnerPlacement="end"
              type="submit"
              isDisabled={isPending}
            >
              Send
            </Button>
          </Flex>
        </Box>
      </form>
    </Suspense>
  );
};
