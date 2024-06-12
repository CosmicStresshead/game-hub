// THIRD-PARTY IMPORTS
import { SimpleGrid, Text } from "@chakra-ui/react";

// PROJECT IMPORTS
import useGames from "../hooks/useGames";
import { IPlatform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { IGenre } from "../hooks/useGenres";

// INTERFACE
interface Props {
  selectedGenre: IGenre | null;
  selectedPlatform: IPlatform | null;
  onClearSelection: () => void;
}

// COMPONENT
const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  onClearSelection,
}: Props) => {
  // Get games list & any retrieval errors
  const { data, error, isLoading } = useGames(
    (selectedGenre = selectedGenre),
    (selectedPlatform = selectedPlatform)
  );

  // Skeleton list
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // const filteredGames = data.filter((g) =>
  //   selectedGenre ? g.genres.includes(selectedGenre) : g
  // );

  // Component markup
  return (
    <>
      {/* {selectedGenre && (
        <HStack gap={4}>
          <Heading>Genre: {selectedGenre.name}</Heading>

          <Button size="sm" onClick={onClearSelection}>
            Clear Filters
          </Button>
        </HStack>
      )} */}
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        margin={3}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
      >
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
