// THIRD-PARTY IMPORTS
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch, BsX, BsXCircle } from "react-icons/bs";
import { IGameQuery } from "../App";

// INTERFACE
interface Props {
  onSearch: (searchText: string) => void;
  gameQuery: IGameQuery;
}

// COMPONENT
const SearchInput = ({ onSearch, gameQuery }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
      onReset={(event) => {
        // only pass on an empty string if there is a search to be cleared
        // -- no unnecessary fetches
        if (gameQuery.searchText) onSearch("");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          id="searchInput"
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
        <InputRightElement as="button" type="reset" children={<BsXCircle />} />
      </InputGroup>
    </form>
  );
};

// EXPORT COMPONENT
export default SearchInput;
