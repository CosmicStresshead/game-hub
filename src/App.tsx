import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { IGenre } from "./hooks/useGenres";
import { IPlatform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
    null
  );

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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre: IGenre) => {
              setSelectedGenre(genre);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main" marginX={4}>
        <HStack gap={4} marginBottom={2}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => {
              setSelectedPlatform(platform);
            }}
          />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          onClearSelection={() => {
            setSelectedGenre(null);
          }}
          onSelectPlatform={(platform) => {
            setSelectedPlatform(platform);
          }}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
