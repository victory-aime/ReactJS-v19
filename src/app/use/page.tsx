import { Box } from "@chakra-ui/react";
import { UseContext, UseDemo } from "../components/use";

const Page = () => {
  return (
    <Box bgColor={"#13171f"} p={8} height={"100vh"} width={"100vw"}>
      <UseContext />
    </Box>
  );
};

export default Page;
