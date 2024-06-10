// PROJECT IMPORTS
import useData from "./useData";

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
}

// COMPONENT
const useGames = () => useData<IGameObject>('/games');

// EXPORT COMPONENT
export default useGames;