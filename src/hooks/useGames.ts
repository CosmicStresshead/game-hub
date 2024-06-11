// PROJECT IMPORTS
import useData from "./useData";
import { IGenre } from "./useGenres";

// INTERFACES
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
  genres: IGenre[];
}

// COMPONENT
const useGames = (selectedGenre: IGenre | null) => useData<IGameObject>('/games', { params: { genres: selectedGenre?.id }}, [selectedGenre]);

// EXPORT COMPONENT
export default useGames;