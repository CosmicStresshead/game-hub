// THIRD-PARY IMPORTS
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

// PROJECT IMPORTS
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

// COMPONENT
const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="6px">
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="40px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

// EXPORT COMPONENT
export default GenreList;
