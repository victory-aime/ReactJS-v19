"use client";

import { Box } from "@chakra-ui/react";
import {
  ActionsComponents,
  CleanUpRef,
  RefExample,
  UseContext,
  UseDemo,
  UseOptimisticExample,
  UseTransitionExample,
} from "./components";

import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("name"));
    }
  }, []);

  const onUpdate = () => {
    setName(localStorage.getItem("name"));
  };
  return (
    <Box bgColor={"#13171f"} p={8} height={"100vh"} width={"100vw"}>
      <UseDemo />
    </Box>
  );
}
