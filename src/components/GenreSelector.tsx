// THIRD-PARTY IMPORTS
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres, { IGenre } from "../hooks/useGenres";

// INTERFACES
interface Props {
  selectedGenre: IGenre | null;
  onSelectGenre: (genre: IGenre | null) => void;
}

// COMPONENT
const GenreSelector = ({ onSelectGenre, selectedGenre }: Props) => {
  // Access platform list
  const { data, error } = useGenres();

  // Don't render if error
  if (error) return null;

  // Output
  return (
    <VStack alignItems="left" gap={1}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedGenre?.name || "All Genres"}
        </MenuButton>

        <MenuList>
          <MenuItem key={-1} onClick={() => onSelectGenre(null)}>
            All Genres
          </MenuItem>

          {data.map((genre) => (
            <MenuItem
              onClick={() => onSelectGenre(genre)}
              key={genre.id}
              value={genre.id}
            >
              {genre.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </VStack>
  );
};

// EXPORT
export default GenreSelector;
