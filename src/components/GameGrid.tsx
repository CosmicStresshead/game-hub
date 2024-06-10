// REACT IMPORTS

// THIRD-PARTY IMPORTS
import { SimpleGrid, Text } from "@chakra-ui/react";

// PROJECT IMPORTS
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  // Get games list & any retrieval errors
  const { games, error } = useGames();

  // Component markup
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={"10"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
