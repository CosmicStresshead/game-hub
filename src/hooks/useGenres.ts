import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface IGenre {
  id: number;
  name: string;
}

export interface IGenresResponse {
  count: number;
  results: IGenre[];
}

const useGenres = () => {
    // State Hooks
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [error, setError] = useState("");
  const [ isLoading, setLoading ] = useState(false);

  // Effect Hook
  useEffect(() => {
    // handle request cancellations
    const controller = new AbortController();

    // request games list from API
    setLoading(true);
    apiClient
      .get<IGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results)
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

  return { genres, error, isLoading }
}

export default useGenres;