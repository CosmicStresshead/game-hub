// PROJECT IMPORTS
import useData from "./useData";
import { IGenre } from "./useGenres";
import { IPlatform } from "./usePlatforms";
import { IGameQuery } from "../App";

// INTERFACES 
export interface IGameObject {
  id: number;
  name: string;
  background_image: string;
  // accomodation for API design smell
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  genres: IGenre[];
  rating_top: number;
}

// COMPONENT
const useGames = (gameQuery: IGameQuery) => 
  useData<IGameObject>(
    '/games', 
    { params: { 
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.sortOrder?.value,
      search: gameQuery.searchText } },
    [gameQuery]);

// EXPORT COMPONENT
export default useGames;