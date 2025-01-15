"use client";

import { Button, Flex } from "@chakra-ui/react";
import { ComponentProps, useState } from "react";

const ButtonRefClean = (ref: ComponentProps<"button">) => {
  return (
    <button
      {...ref}
      style={{
        background: "blue",
        borderRadius: 8,
        padding: 8,
        color: "white",
      }}
    >
      Download
    </button>
  );
};

export const CleanUpRef = () => {
  const [show, setShow] = useState(false);
  return (
    <Flex gap={8}>
      <Button color="black" onClick={() => setShow(!show)}>
        Toogle
      </Button>
      {show ? (
        <ButtonRefClean
          ref={() => {
            console.log("ref callback");
            return () => {
              console.log("cleanup");
            };
          }}
        />
      ) : null}
    </Flex>
  );
};
