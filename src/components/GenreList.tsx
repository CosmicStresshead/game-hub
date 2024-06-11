// THIRD-PARY IMPORTS
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

// PROJECT IMPORTS
import useGenres, { IGenre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

// INTERFACES
interface Props {
  onSelectGenre: (genre: IGenre) => void;
  selectedGenre: IGenre | null;
}

// COMPONENT
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="6px" gap={3}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="40px"
              borderRadius={8}
            />
            <Button
              variant="link"
              fontWeight={
                selectedGenre && genre.id === selectedGenre.id
                  ? "bold"
                  : "inherit"
              }
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

// EXPORT COMPONENT
export default GenreList;
