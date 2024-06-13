// REACT IMPORTS
import { useState } from "react";

// THIRD-PARTY IMPORTS
import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";

// PROJECT IMPORTS
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { ISortingOption } from "./components/SortSelector";
import { IGenre } from "./hooks/useGenres";
import { IPlatform } from "./hooks/usePlatforms";
import GameGridHeading from "./components/GameGridHeading";

// INTERFACES
export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
  sortOrder: ISortingOption | null;
  searchText: string;
}

// COMPONENT
function App() {
  // Game Query State
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "225px 1fr",
      }}
    >
      <GridItem area="nav" paddingBottom={3}>
        <NavBar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText: searchText });
          }}
          gameQuery={gameQuery}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: IGenre) => {
              setGameQuery({ ...gameQuery, genre: genre });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main" marginX={4}>
        <GameGridHeading
          gameQuery={gameQuery}
          onClearFilters={() =>
            setGameQuery({ ...gameQuery, platform: null, genre: null })
          }
        />
        <Flex gap={4} marginBottom={8} alignItems="center">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => {
              setGameQuery({ ...gameQuery, platform: platform });
            }}
          />
          <SortSelector
            gameQuery={gameQuery}
            onSelectSort={(sortOrder) => {
              setGameQuery({ ...gameQuery, sortOrder: sortOrder });
            }}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

// EXPORT
export default App;
