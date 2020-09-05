import { RootState } from "../../root-reducer";
import { createSelector } from "reselect";
import { createPartitions } from "./utils";
import { currentDefinitions, startBoard } from "./data";

/**
 * Feature identifier
 */
export const NAME = "@game";

/**
 * Types, interfaces and constants
 */
export const RESET_GAME = "@game/RESET_GAME";
export const COLLECT_ITEM = "@game/COLLECT_ITEM";

export interface ResetGameAction {
  type: typeof RESET_GAME;
}

export interface CollectItemAction {
  type: typeof COLLECT_ITEM;
  payload: {
    index: number;
  };
}

export type GameAction = ResetGameAction | CollectItemAction;

export type BoardItem = "A" | "B" | "C" | "D";

export interface ScoringDefinition {
  type: BoardItem;
  points: number;
  bonus: number[];
}

export interface ScoreBoardItem {
  type: BoardItem;
  quantity: number;
  points: number;
}

export interface GameState {
  board: BoardItem[];
  collected: BoardItem[];
  definitions: ScoringDefinition[];
}

/**
 * Action creators
 */
export const resetGame = (): ResetGameAction => {
  return {
    type: RESET_GAME,
  };
};

export const collectItem = (index: number): CollectItemAction => {
  return {
    type: COLLECT_ITEM,
    payload: { index },
  };
};

/**
 * Selectors
 */
export const getState = (state: RootState) => state[NAME];
export const getGameBoard = (state: RootState) => getState(state).board;
export const getDefinitions = (state: RootState) => getState(state).definitions;
export const getCollectedItems = (state: RootState) =>
  getState(state).collected;

export const getScoreBoard = createSelector(
  getCollectedItems,
  getDefinitions,
  (collectedItems, scoringDefinitions) => {
    const partitionedItems = createPartitions<BoardItem>(collectedItems);
    return partitionedItems.reduce<ScoreBoardItem[]>((output, partition) => {
      const type = partition[0];

      const { points = 0, bonus = [] } =
        scoringDefinitions.find(
          (scoringDefinition) => scoringDefinition.type === type
        ) || {};

      const itemPoints = partition.reduce((sum, item) => sum + points, 0);

      const itemBonus = bonus
        .slice(0, partition.length)
        .reduce((sum, bonus) => sum + bonus, 0);

      return [
        ...output,
        {
          type,
          quantity: partition.length,
          points: itemPoints + itemBonus,
        },
      ];
    }, []);
  }
);

export const getBonusPoints = createSelector(
  getCollectedItems,
  getDefinitions,
  (collectedItems, scoringDefinitions) => {
    const partitionedItems = createPartitions<BoardItem>(collectedItems);
    return partitionedItems.reduce((totalPoints, partition) => {
      const type = partition[0];

      const { bonus = [] } =
        scoringDefinitions.find(
          (scoringDefinition) => scoringDefinition.type === type
        ) || {};

      const bonusPoints = bonus
        .slice(0, partition.length)
        .reduce((sum, bonus) => sum + bonus, 0);

      return totalPoints + bonusPoints;
    }, 0);
  }
);

export const getTotalScore = createSelector(getScoreBoard, (scoreBoard) => {
  return scoreBoard.reduce(
    (total, scoreBoardItem) => scoreBoardItem.points + total,
    0
  );
});

/**
 * Game state and reducer
 */
export const initialGameState: GameState = {
  board: startBoard,
  collected: [],
  definitions: currentDefinitions,
};

export default function reducer(
  state: GameState = initialGameState,
  action: GameAction
): GameState {
  switch (action.type) {
    case RESET_GAME:
      return initialGameState;
    case COLLECT_ITEM:
      const collectedItem = state.board[action.payload.index];
      return {
        ...state,
        board: [
          ...state.board.slice(0, action.payload.index),
          ...state.board.slice(action.payload.index + 1),
        ],
        collected: collectedItem
          ? [...state.collected, collectedItem]
          : state.collected,
      };
    default:
      return state;
  }
}
