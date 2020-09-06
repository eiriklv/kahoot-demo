import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGameBoard, collectItem } from "../duck";
import { GameWrapper, GameHeader, Heading } from "../components/primitives";
import { GameBoard } from "../components/GameBoard";

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const gameBoard = useSelector(getGameBoard);

  const handleItemClick = (index: number) => {
    dispatch(collectItem(index));
  };

  return (
    <GameWrapper id="game">
      <GameHeader>
        <Heading>Kahoot! Points</Heading>
      </GameHeader>
      <GameBoard gameBoard={gameBoard} onItemClick={handleItemClick} />
    </GameWrapper>
  );
};
