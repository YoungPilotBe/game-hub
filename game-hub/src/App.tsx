import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGamequery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGamequery({ ...gameQuery, genre })}
            selecetedGenre={gameQuery.genre}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={9} marginBottom={5}>
          <Box marginRight={6}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGamequery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            ></PlatformSelector>
          </Box>
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGamequery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          ></SortSelector>
        </Flex>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
