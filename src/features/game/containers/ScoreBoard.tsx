import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getScoreBoard,
  getBonusPoints,
  getTotalScore,
  resetGame,
} from "../duck";

import {
  Heading,
  SubHeading,
  ScoreBoardContainer,
  ScoreBoardHeader,
  ScoreBoardItemsContainer,
  ScoreBoardFooter,
  ScoreTable,
  ScoreTableHeaderRow,
  ScoreTableDataRow,
  ScoreTableCell,
  ScoreItem,
  PointsContainer,
  ButtonContainer,
  Button,
} from "../components/primitives";

export const ScoreBoard: React.FC = (props) => {
  const dispatch = useDispatch();
  const scoreBoard = useSelector(getScoreBoard);
  const bonusPoints = useSelector(getBonusPoints);
  const totalScore = useSelector(getTotalScore);

  const hasItems = !!scoreBoard.length;

  const handleNewGameClick = () => {
    dispatch(resetGame());
  };

  const scoreTableHeaderRow = (
    <ScoreTableHeaderRow>
      <th>Item</th>
      <th>Qty</th>
      <th>Score</th>
    </ScoreTableHeaderRow>
  );

  const scoreTableDataRows = scoreBoard.map((scoreBoardItem) => (
    <ScoreTableDataRow>
      <ScoreTableCell>
        <ScoreItem>{scoreBoardItem.type}</ScoreItem>
      </ScoreTableCell>
      <ScoreTableCell>{scoreBoardItem.quantity}</ScoreTableCell>
      <ScoreTableCell>{scoreBoardItem.points}</ScoreTableCell>
    </ScoreTableDataRow>
  ));

  return (
    <ScoreBoardContainer>
      <ScoreBoardHeader>
        <Heading>Player Items</Heading>
      </ScoreBoardHeader>
      <ScoreBoardItemsContainer>
        <ScoreTable>
          {scoreTableHeaderRow}
          {scoreTableDataRows}
        </ScoreTable>
        {!hasItems && <SubHeading>Collect items!</SubHeading>}
      </ScoreBoardItemsContainer>
      <ScoreBoardFooter>
        <PointsContainer>
          <h3>Bonuses:</h3>
          <h3>{bonusPoints}</h3>
        </PointsContainer>
        <PointsContainer>
          <h3>Total:</h3>
          <h3>{totalScore}</h3>
        </PointsContainer>
        <ButtonContainer>
          <Button onClick={handleNewGameClick}>New Game</Button>
        </ButtonContainer>
      </ScoreBoardFooter>
    </ScoreBoardContainer>
  );
};
