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
  ScoresWrapper,
  ScoresHeader,
  ScoreBoardWrapper,
  ScoresFooter,
  PointsWrapper,
  ActionsWrapper,
  Button,
} from "../components/primitives";

import { ScoreBoard } from "../components/ScoreBoard";

export const Scores: React.FC = () => {
  const dispatch = useDispatch();
  const scoreBoard = useSelector(getScoreBoard);
  const bonusPoints = useSelector(getBonusPoints);
  const totalScore = useSelector(getTotalScore);

  const handleNewGameClick = () => {
    dispatch(resetGame());
  };

  return (
    <ScoresWrapper id="scores">
      <ScoresHeader>
        <Heading>Player Items</Heading>
      </ScoresHeader>
      <ScoreBoardWrapper>
        <ScoreBoard scoreBoard={scoreBoard} />
      </ScoreBoardWrapper>
      <ScoresFooter>
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
      </ScoresFooter>
    </ScoresWrapper>
  );
};
