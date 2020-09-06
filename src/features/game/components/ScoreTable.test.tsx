import React from "react";
import renderer from "react-test-renderer";
import { ScoreTable } from "./ScoreTable";
import { ScoreBoardItem } from "../duck";

describe("ScoreTable", () => {
  test("renders correctly when empty", () => {
    const scoreBoard: ScoreBoardItem[] = [];

    const tree = renderer
      .create(<ScoreTable scoreBoard={scoreBoard} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders correctly when filled", () => {
    const scoreBoard: ScoreBoardItem[] = [
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
    ];

    const tree = renderer
      .create(<ScoreTable scoreBoard={scoreBoard} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
