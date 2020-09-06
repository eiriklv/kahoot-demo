import React from "react";

import { Game } from "./features/game/containers/Game";
import { Scores } from "./features/game/containers/Scores";
import { Grid } from "./shared/components/primitives";

function App() {
  return (
    <Grid>
      <Game />
      <Scores />
    </Grid>
  );
}

export default App;
