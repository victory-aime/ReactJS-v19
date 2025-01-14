import { Box } from "@chakra-ui/react";
import { RefExample } from "../components/ref/RefExample";
import { CleanUpRef } from "../components/ref/CleanUpRef";

const PageRef = () => {
  return (
    <Box bgColor={"#13171f"} p={8} height={"100vh"} width={"100vw"}>
      <RefExample />
    </Box>
  );
};

export default PageRef;
