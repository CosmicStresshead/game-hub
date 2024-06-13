// THIRD-PARTY IMPORTS
import { Button, Heading, Text, VStack } from "@chakra-ui/react";

// PROJECT IMPORTS
import { IGameQuery } from "../App";

// INTERFACES
interface Props {
  gameQuery: IGameQuery;
  onClearFilters: () => void;
}

// COMPONENT
const GameGridHeading = ({ gameQuery, onClearFilters }: Props) => {
  return (
    <VStack marginBottom={6} alignItems="start">
      <Heading as="h1" marginTop={0} paddingTop={0} fontSize="5xl">
        {gameQuery.genre?.name ? gameQuery.genre.name + " " : ""}
        {gameQuery.platform?.name ? gameQuery.platform?.name + " " : ""}
        Games
        {(gameQuery.genre || gameQuery.platform) && (
          <Button
            marginX={4}
            variant="link"
            fontWeight="normal"
            color="lightgray"
            name="Clear filters"
            onClick={onClearFilters}
          >
            [clear filters]
          </Button>
        )}
      </Heading>
      {gameQuery.searchText && (
        <Text fontStyle="italic" marginTop={2}>
          Showing results for: "{gameQuery.searchText}"
        </Text>
      )}
    </VStack>
  );
};

// EXPORT
export default GameGridHeading;
