import React from "react";

import { BoardItem } from "../duck";
import { GameBoardItem, GameBoardWrapper } from "../components/primitives";

interface GameBoardProps {
  gameBoard: BoardItem[];
  onItemClick: (index: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  gameBoard,
  onItemClick,
}) => {
  const boardItemElements = gameBoard.map((boardItem, index) => (
    <GameBoardItem
      key={`${index}-${boardItem}`}
      onClick={() => onItemClick(index)}
    >
      {boardItem}
    </GameBoardItem>
  ));

  return <GameBoardWrapper>{boardItemElements}</GameBoardWrapper>;
};
