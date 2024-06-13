// REACT IMPORTS
import { useState } from "react";

// THIRD-PARTY IMPORTS
import { Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

// PROJECT IMPORTS
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { ISortingOption } from "./components/SortSelector";
import { IGenre } from "./hooks/useGenres";
import { IPlatform } from "./hooks/usePlatforms";

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
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" paddingBottom={3}>
        <NavBar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText: searchText });
          }}
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
        <Flex gap={4} marginBottom={4}>
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
        <GameGrid
          gameQuery={gameQuery}
          onClearSelection={() => {
            setGameQuery({} as IGameQuery);
          }}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
