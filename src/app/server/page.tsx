import { Box } from "@chakra-ui/react";
import { ServerActions } from "../components/ServerActions";

const ServerActionsPage = () => {
  return (
    <Box bgColor={"#13171f"} p={8} height={"100vh"} width={"100vw"}>
      <ServerActions />
    </Box>
  );
};

export default ServerActionsPage;
