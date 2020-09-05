import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameBoard, collectItem } from "../duck";

import {
  GameBoardItem,
  GameBoardContainer,
  GameBoardHeader,
  GameBoardItemsContainer,
  Heading,
} from "../components/primitives";

export const GameBoard: React.FC = (props) => {
  const gameBoard = useSelector(getGameBoard);
  const dispatch = useDispatch();

  const handleItemClick = (index: number) => {
    dispatch(collectItem(index));
  };

  const gameItemElements = gameBoard.map((boardItem, index) => (
    <GameBoardItem onClick={() => handleItemClick(index)}>
      {boardItem}
    </GameBoardItem>
  ));

  return (
    <GameBoardContainer>
      <GameBoardHeader>
        <Heading>Kahoot! Points</Heading>
      </GameBoardHeader>
      <GameBoardItemsContainer>{gameItemElements}</GameBoardItemsContainer>
    </GameBoardContainer>
  );
};
