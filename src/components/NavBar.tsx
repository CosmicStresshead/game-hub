// REACT IMPORTS
import { HStack, Image } from "@chakra-ui/react";

// PROJECT IMPORTS
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

// COMPONENT
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingX={4}>
      <Image src={logo} boxSize={16} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

// EXPORT COMPONENT
export default NavBar;
