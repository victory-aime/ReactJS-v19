import { Box } from "@chakra-ui/react";
import {
  DemoActionHooks,
  DemoUseTransitionHooks,
} from "./components/demo/AllDemoFiles";
import UseOptimisticExample from "./components/useOptimistic";

export default function Home() {
  return (
    <Box bgColor={"#13171f"} p={8} height={"100vh"} width={"100vw"}>
      <DemoUseTransitionHooks />
    </Box>
  );
}
