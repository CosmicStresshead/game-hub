// THIRD-PARTY IMPORTS
import { SimpleGrid, Text } from "@chakra-ui/react";

// PROJECT IMPORTS
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

// COMPONENT
const GameGrid = () => {
  // Get games list & any retrieval errors
  const { data, error, isLoading } = useGames();

  // Skeleton list
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Component markup
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        margin={3}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
      >
        {isLoading && skeletons.map((sk) => <GameCardSkeleton key={sk} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

// EXPORT COMPONENT
export default GameGrid;
