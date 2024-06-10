import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

//INTERFACES
export interface IGameObject {
  id: number;
  name: string;
  background_image: string;
}

interface IGamesResponse {
  count: number;
  results: IGameObject[];
}

const useGames = () => {
   // State Hooks
  const [games, setGames] = useState<IGameObject[]>([]);
  const [error, setError] = useState("");

  // Effect Hook
  useEffect(() => {
    // handle request cancellations
    const controller = new AbortController();

    // request games list from API
    apiClient
      .get<IGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        // don't report cancelled error (why?)
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

    // return cleanup function
    return () => {controller.abort()}
  }, []);

  return { games, error }
}


export default useGames;