// REACT IMPORTS

// THIRD-PARTY IMPORTS
import { SimpleGrid, Text } from "@chakra-ui/react";

// PROJECT IMPORTS
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  // Get games list & any retrieval errors
  const { games, error, isLoading } = useGames();

  // Skeleton list
  const skeletons = [1, 2, 3, 4, 5, 6];

  // Component markup
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        padding={3}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={"10"}
      >
        {isLoading && skeletons.map((sk) => <GameCardSkeleton key={sk} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
