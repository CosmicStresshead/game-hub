// REACT IMPORTS
import { HStack, Image } from "@chakra-ui/react";

// PROJECT IMPORTS
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { IGameQuery } from "../App";

interface Props {
  onSearch: (searchText: string) => void;
  gameQuery: IGameQuery;
}

// COMPONENT
const NavBar = ({ onSearch, gameQuery }: Props) => {
  return (
    <HStack paddingX={4}>
      <Image src={logo} boxSize={16} />
      <SearchInput onSearch={onSearch} gameQuery={gameQuery} />
      <ColorModeSwitch />
    </HStack>
  );
};

// EXPORT COMPONENT
export default NavBar;
