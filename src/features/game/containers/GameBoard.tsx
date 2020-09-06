import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getGameBoard, collectItem } from "../duck";

import {
  GameBoardItem,
  GameBoardWrapper,
  GameBoardHeader,
  GameBoardItemsWrapper,
  Heading,
} from "../components/primitives";

export const GameBoard: React.FC = (props) => {
  const dispatch = useDispatch();
  const gameBoard = useSelector(getGameBoard);

  const handleItemClick = (index: number) => {
    dispatch(collectItem(index));
  };

  const boardItemElements = gameBoard.map((boardItem, index) => (
    <GameBoardItem
      key={`${index}-${boardItem}`}
      onClick={() => handleItemClick(index)}
    >
      {boardItem}
    </GameBoardItem>
  ));

  return (
    <GameBoardWrapper id="gameBoard">
      <GameBoardHeader>
        <Heading>Kahoot! Points</Heading>
      </GameBoardHeader>
      <GameBoardItemsWrapper>{boardItemElements}</GameBoardItemsWrapper>
    </GameBoardWrapper>
  );
};
