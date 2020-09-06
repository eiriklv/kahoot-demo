import React from "react";
import renderer from "react-test-renderer";
import { GameBoard } from "./GameBoard";
import { BoardItem } from "../duck";

describe("GameBoard", () => {
  test("renders correctly when empty", () => {
    const gameBoard: BoardItem[] = [];

    const onItemClick = () => {};

    const tree = renderer
      .create(<GameBoard gameBoard={gameBoard} onItemClick={onItemClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders correctly when filled", () => {
    const gameBoard: BoardItem[] = ["A", "B", "C", "D", "A", "B", "C"];
    const onItemClick = () => {};

    const tree = renderer
      .create(<GameBoard gameBoard={gameBoard} onItemClick={onItemClick} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
