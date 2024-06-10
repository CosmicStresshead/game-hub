import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface IData {
  id: number;
  name: string;
}

export interface IResponse<T> {
  count: number;
  results: T[];
}

const useData = <T extends IData>(endpoint: string) => {

    // State Hooks
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [ isLoading, setLoading ] = useState(false);

  // Effect Hook
  useEffect(() => {
    // handle request cancellations
    const controller = new AbortController();

    // request games list from API
    setLoading(true);
    apiClient
      .get<IResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results)
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

  return { data, error, isLoading }
}

export default useData;