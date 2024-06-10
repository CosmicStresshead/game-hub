// REACT IMPORTS
import { useEffect, useState } from "react";

// PROJECT IMPORTS
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

//INTERFACES
interface IGameObject {
  id: number;
  name: string;
}

interface IGamesResponse {
  count: number;
  results: IGameObject[];
}

const GameGrid = () => {
  // State Hooks
  const [games, setGames] = useState<IGameObject[]>([]);
  const [error, setError] = useState("");

  // Effect Hook
  useEffect(() => {
    apiClient
      .get<IGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  // Component Markup
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
