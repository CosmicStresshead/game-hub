import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { IGenre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);

  const onSelectGenre = (genre: IGenre) => {
    setSelectedGenre(genre);
    console.log("Selected:", genre.name);
  };

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
          <GenreList onSelectGenre={onSelectGenre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid
          selectedGenre={selectedGenre}
          onClearSelection={() => {
            setSelectedGenre(null);
          }}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
