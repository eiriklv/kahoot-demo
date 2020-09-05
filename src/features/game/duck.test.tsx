import reducer, {
  NAME as gameStateName,
  GameState,
  GameAction,
  initialGameState,
  getGameBoard,
  getCollectedItems,
  getBonusPoints,
  getScoreBoard,
  getTotalScore,
  collectItem,
  resetGame,
} from "./duck";

import { RootState } from "../../root-reducer";

describe("getGameBoard", () => {
  test("should get correct board when empty", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: [],
        definitions: [],
      },
    };

    const output = getGameBoard(state);

    expect(output).toEqual([]);
  });

  test("should get correct board when filled and none collected", () => {
    const state: RootState = {
      [gameStateName]: {
        board: ["A", "B", "C", "D", "A"],
        collected: [],
        definitions: [],
      },
    };

    const output = getGameBoard(state);

    expect(output).toEqual(["A", "B", "C", "D", "A"]);
  });

  test("should get correct board when filled and some collected", () => {
    const state: RootState = {
      [gameStateName]: {
        board: ["A", "B", "C"],
        collected: ["D", "A"],
        definitions: [],
      },
    };

    const output = getGameBoard(state);

    expect(output).toEqual(["A", "B", "C"]);
  });
});

describe("getCollectedItems", () => {
  test("should get correct items when none collected - case 1", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: [],
        definitions: [],
      },
    };

    const output = getCollectedItems(state);

    expect(output).toEqual([]);
  });

  test("should get correct items when nono collected - case 2", () => {
    const state: RootState = {
      [gameStateName]: {
        board: ["A", "B", "C", "D", "A"],
        collected: [],
        definitions: [],
      },
    };

    const output = getCollectedItems(state);

    expect(output).toEqual([]);
  });

  test("should get correct items when some collected - case 1", () => {
    const state: RootState = {
      [gameStateName]: {
        board: ["A", "B", "C"],
        collected: ["D", "A"],
        definitions: [],
      },
    };

    const output = getCollectedItems(state);

    expect(output).toEqual(["D", "A"]);
  });

  test("should get correct items when some collected - case 2", () => {
    const state: RootState = {
      [gameStateName]: {
        board: ["A", "B", "C"],
        collected: ["D", "A", "B", "C"],
        definitions: [],
      },
    };

    const output = getCollectedItems(state);

    expect(output).toEqual(["D", "A", "B", "C"]);
  });
});

describe("getBonusPoints", () => {
  test("should get no bonus when no items collected", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: [],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getBonusPoints(state);

    expect(output).toEqual(0);
  });

  test("should get correct bonus - case 1", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A", "A", "B", "C", "D"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getBonusPoints(state);

    expect(output).toEqual(0);
  });

  test("should get correct bonus - case 2", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A", "A", "A", "B", "C", "D"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getBonusPoints(state);

    expect(output).toEqual(50);
  });

  test("should get correct bonus - case 3", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A", "A", "A", "B", "B", "C", "D"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getBonusPoints(state);

    expect(output).toEqual(80);
  });

  test("should get correct bonus - case 4", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A", "A", "A", "A", "B", "B", "B", "C", "D"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getBonusPoints(state);

    expect(output).toEqual(80);
  });
});

describe("getScoreBoard", () => {
  test("should get correct board when none collected", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: [],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getScoreBoard(state);

    expect(output).toEqual([]);
  });

  test("should get correct board when single item collected", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getScoreBoard(state);

    expect(output).toEqual([
      {
        type: "A",
        points: 50,
        quantity: 1,
      },
    ]);
  });

  test("should get correct board when multiple items of single type collected", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A", "A", "A", "A"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getScoreBoard(state);

    expect(output).toEqual([
      {
        type: "A",
        points: 250,
        quantity: 4,
      },
    ]);
  });

  test("should get correct board when multiple items of multiple types collected", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A", "A", "A", "A", "B", "B", "B", "C", "C", "D"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getScoreBoard(state);

    expect(output).toEqual([
      {
        type: "A",
        points: 250,
        quantity: 4,
      },
      {
        type: "B",
        points: 120,
        quantity: 3,
      },
      {
        type: "C",
        points: 40,
        quantity: 2,
      },
      {
        type: "D",
        points: 15,
        quantity: 1,
      },
    ]);
  });
});

describe("getTotalScore", () => {
  test("should get correct total score when no items collected", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: [],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getTotalScore(state);

    expect(output).toEqual(0);
  });

  test("should get correct total score when items collected - case 1", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getTotalScore(state);

    expect(output).toEqual(50);
  });

  test("should get correct total score when items collected - case 2", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A", "A", "A"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getTotalScore(state);

    expect(output).toEqual(200);
  });

  test("should get correct total score when items collected - case 3", () => {
    const state: RootState = {
      [gameStateName]: {
        board: [],
        collected: ["A", "A", "A", "B", "B", "C", "D"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      },
    };

    const output = getTotalScore(state);

    expect(output).toEqual(325);
  });
});

describe("reducer", () => {
  describe("COLLECT_ITEM", () => {
    test("should handle collecting items - case 1", () => {
      const initialState: GameState = {
        board: ["A", "B", "C", "D"],
        collected: [],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      };

      const actions: GameAction[] = [
        collectItem(0),
        collectItem(0),
        collectItem(0),
      ];

      const nextState = actions.reduce(reducer, initialState);

      expect(nextState).toEqual({
        board: ["D"],
        collected: ["A", "B", "C"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      });
    });

    test("should handle collecting items - case 2", () => {
      const initialState: GameState = {
        board: ["A", "B", "C", "D"],
        collected: [],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      };

      const actions: GameAction[] = [
        collectItem(0),
        collectItem(0),
        collectItem(0),
        collectItem(0),
      ];

      const nextState = actions.reduce(reducer, initialState);

      expect(nextState).toEqual({
        board: [],
        collected: ["A", "B", "C", "D"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      });
    });

    test("should handle collecting item that does not exist", () => {
      const initialState: GameState = {
        board: ["A", "B", "C", "D"],
        collected: [],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      };

      const actions: GameAction[] = [
        collectItem(0),
        collectItem(0),
        collectItem(0),
        collectItem(0),
        collectItem(0),
      ];

      const nextState = actions.reduce(reducer, initialState);

      expect(nextState).toEqual({
        board: [],
        collected: ["A", "B", "C", "D"],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      });
    });
  });

  describe("RESET_GAME", () => {
    test("should reset game correctly", () => {
      const currentState: GameState = {
        board: ["A", "B", "C", "D"],
        collected: [],
        definitions: [
          { type: "A", points: 50, bonus: [0, 0, 50] },
          { type: "B", points: 30, bonus: [0, 30] },
          { type: "C", points: 20, bonus: [] },
          { type: "D", points: 15, bonus: [] },
        ],
      };

      const actions: GameAction[] = [resetGame()];

      const nextState = actions.reduce(reducer, currentState);

      expect(nextState).toEqual(initialGameState);
    });
  });
});
