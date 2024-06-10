import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

//INTERFACES
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface IGameObject {
  id: number;
  name: string;
  background_image: string;
  // accomodation for API design smell
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface IGamesResponse {
  count: number;
  results: IGameObject[];
}

const useGames = () => {
   // State Hooks
  const [games, setGames] = useState<IGameObject[]>([]);
  const [error, setError] = useState("");
  const [ isLoading, setLoading ] = useState(false);

  // Effect Hook
  useEffect(() => {
    // handle request cancellations
    const controller = new AbortController();

    // request games list from API
    setLoading(true);
    apiClient
      .get<IGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results)
        setLoading(false);
      }
      )
      .catch((err) => {
        // don't report cancelled error (why?)
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
      });

    // return cleanup function
    return () => {controller.abort()}
  }, []);

  return { games, error, isLoading }
}


export default useGames;