import React from "react";

import { GameBoard } from "./features/game/containers/GameBoard";
import { ScoreBoard } from "./features/game/containers/ScoreBoard";
import { AppContainer } from "./shared/components/primitives";

function App() {
  return (
    <AppContainer>
      <GameBoard />
      <ScoreBoard />
    </AppContainer>
  );
}

export default App;
