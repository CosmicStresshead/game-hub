// REACT IMPORTS
import { HStack, Image } from "@chakra-ui/react";

// PROJECT IMPORTS
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

// COMPONENT
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="12px">
      <Image src={logo} boxSize={"64px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

// EXPORT COMPONENT
export default NavBar;
