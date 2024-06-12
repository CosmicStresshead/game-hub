// REACT IMPORTS
import { useState } from "react";

// THIRD-PARTY IMPORTS
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

// PROJECT IMPORTS
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { IGenre } from "./hooks/useGenres";
import { IPlatform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";

// INTERFACES
export interface IGameQuery {
  genre: IGenre | null;
  platform: IPlatform | null;
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
        <NavBar />
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
        <HStack gap={4} marginBottom={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => {
              setGameQuery({ ...gameQuery, platform: platform });
            }}
          />
        </HStack>
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
