// REACT IMPORTS
import { ReactNode } from "react";

// THIRD-PARTY IMPORTS
import { Box } from "@chakra-ui/react";

// INTERFACES
interface Props {
  children: ReactNode;
}

// COMPONENT
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

// EXPORT COMPONENT
export default GameCardContainer;
