// PROJECT IMPORTS
import useData from "./useData";
import genreData from "../data/genres";

// INTERFACES
export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

// HOOK LOGIC
const useGenres = (live:boolean=false) => {
  if (live) return useData<IGenre>("/genres")
    // unless specified, use cached data
  else return { data: genreData, isLoading: false, error: null }
}

// EXPORT HOOK
export default useGenres;