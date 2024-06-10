// REACT IMPORTS
import { HStack, Image } from "@chakra-ui/react";
// PROJECT IMPORTS
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="12px">
      <Image src={logo} boxSize={"64px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
