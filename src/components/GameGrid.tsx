// THIRD-PARTY IMPORTS
import { SimpleGrid, Text } from "@chakra-ui/react";

// PROJECT IMPORTS
import { IGameQuery } from "../App";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "../hooks/useGames";

// INTERFACE
interface Props {
  gameQuery: IGameQuery;
}

// COMPONENT
const GameGrid = ({ gameQuery }: Props) => {
  // Get games list & any retrieval errors
  const { data, error, isLoading } = useGames(gameQuery);

  // Skeleton list
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Component markup
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeletonIndex) => (
            <GameCardSkeleton key={skeletonIndex} />
          ))}

        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

// EXPORT COMPONENT
export default GameGrid;
