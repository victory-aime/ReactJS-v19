"use client";

import { Button, Flex } from "@chakra-ui/react";
import { ComponentProps, useRef } from "react";

const ButtonRef = (ref: ComponentProps<"button">) => {
  return (
    <button
      style={{
        background: "blue",
        borderRadius: 8,
        padding: 8,
        color: "white",
      }}
      {...ref}
    >
      Download
    </button>
  );
};

export const RefExample = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    if (!ref.current) return;
    ref.current.style.background = Math.random() > 0.5 ? "red" : "green";
  };

  return (
    <Flex gap={8}>
      <Button color="black" onClick={onClick}>
        Change Background
      </Button>

      <ButtonRef ref={ref} />
    </Flex>
  );
};
