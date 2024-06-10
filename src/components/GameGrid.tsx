// REACT IMPORTS

// THIRD-PARTY IMPORTS
import { Text } from "@chakra-ui/react";

// PROJECT IMPORTS
import useGames from "../hooks/useGames";

const GameGrid = () => {
  // Get games list & any retrieval errors
  const { games, error } = useGames();

  // Component markup
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
