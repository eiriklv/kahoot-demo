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
  ScoreBoardTableWrapper,
  ScoreBoardFooter,
  PointsWrapper,
  ActionsWrapper,
  Button,
} from "../components/primitives";
import { ScoreTable } from "../components/ScoreTable";

export const ScoreBoard: React.FC = (props) => {
  const dispatch = useDispatch();
  const scoreBoard = useSelector(getScoreBoard);
  const bonusPoints = useSelector(getBonusPoints);
  const totalScore = useSelector(getTotalScore);
  const hasStarted = !!scoreBoard.length;

  const handleNewGameClick = () => {
    dispatch(resetGame());
  };

  return (
    <ScoreBoardWrapper id="scoreBoard">
      <ScoreBoardHeader>
        <Heading>Player Items</Heading>
      </ScoreBoardHeader>
      <ScoreBoardTableWrapper>
        <ScoreTable scoreBoard={scoreBoard} />
        {!hasStarted && <SubHeading>Collect items!</SubHeading>}
      </ScoreBoardTableWrapper>
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
