// THIRD-PARTY IMPORTS
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

// COMPONENT
const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        defaultValue="Search games..."
        variant="filled"
      />
    </InputGroup>
  );
};

// EXPORT COMPONENT
export default SearchInput;
