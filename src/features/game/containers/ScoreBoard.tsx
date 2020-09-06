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
  ScoreBoardWrapper,
  ScoreBoardHeader,
  ScoreBoardItemsWrapper,
  ScoreBoardFooter,
  ScoreTable,
  ScoreTableHeaderRow,
  ScoreTableDataRow,
  ScoreItem,
  PointsWrapper,
  ActionsWrapper,
  Button,
} from "../components/primitives";

export const ScoreBoard: React.FC = (props) => {
  const dispatch = useDispatch();
  const scoreBoard = useSelector(getScoreBoard);
  const bonusPoints = useSelector(getBonusPoints);
  const totalScore = useSelector(getTotalScore);
  const hasStarted = !!scoreBoard.length;

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

  const scoreTableDataRows = scoreBoard.map((scoreBoardItem, index) => (
    <ScoreTableDataRow key={`${index}-${scoreBoardItem.type}`}>
      <td>
        <ScoreItem>{scoreBoardItem.type}</ScoreItem>
      </td>
      <td>{scoreBoardItem.quantity}</td>
      <td>{scoreBoardItem.points}</td>
    </ScoreTableDataRow>
  ));

  return (
    <ScoreBoardWrapper>
      <ScoreBoardHeader>
        <Heading>Player Items</Heading>
      </ScoreBoardHeader>
      <ScoreBoardItemsWrapper>
        <ScoreTable>
          <thead>{scoreTableHeaderRow}</thead>
          <tbody>{scoreTableDataRows}</tbody>
        </ScoreTable>
        {!hasStarted && <SubHeading>Collect items!</SubHeading>}
      </ScoreBoardItemsWrapper>
      <ScoreBoardFooter>
        <PointsWrapper>
          <h3>Bonuses:</h3>
          <h3>{bonusPoints}</h3>
        </PointsWrapper>
        <PointsWrapper>
          <h3>Total:</h3>
          <h3>{totalScore}</h3>
        </PointsWrapper>
        <ActionsWrapper>
          <Button onClick={handleNewGameClick}>New Game</Button>
        </ActionsWrapper>
      </ScoreBoardFooter>
    </ScoreBoardWrapper>
  );
};
