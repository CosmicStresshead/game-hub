// PROJECT IMPORTS
import useData from "./useData";
import { IGenre } from "./useGenres";
import { IPlatform } from "./usePlatforms";

// INTERFACES
export interface IGameObject {
  id: number;
  name: string;
  background_image: string;
  // accomodation for API design smell
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  genres: IGenre[];
}

// COMPONENT
const useGames = (selectedGenre: IGenre | null, selectedPlatform: IPlatform | null) => useData<IGameObject>('/games', { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id }}, [selectedGenre]);

// EXPORT COMPONENT
export default useGames;