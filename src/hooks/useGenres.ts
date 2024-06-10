// PROJECT IMPORTS
import useData from "./useData";

// INTERFACES
export interface IGenre {
  id: number;
  name: string;
}

// HOOK LOGIC
const useGenres = () => useData<IGenre>("/genres");

// EXPORT HOOK
export default useGenres;