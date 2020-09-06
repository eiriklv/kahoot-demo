import React from "react";

import { ScoreBoardItem } from "../duck";
import {
  Table,
  TableHeaderRow,
  TableDataRow,
  ScoreItem,
  SubHeading,
} from "./primitives";

interface ScoreBoardProps {
  scoreBoard: ScoreBoardItem[];
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ scoreBoard = [] }) => {
  const hasStarted = !!scoreBoard.length;

  const scoreBoardHeaderRow = (
    <TableHeaderRow>
      <th>Item</th>
      <th>Qty</th>
      <th>Score</th>
    </TableHeaderRow>
  );

  const scoreBoardDataRows = scoreBoard.map((scoreBoardItem, index) => (
    <TableDataRow key={`${index}-${scoreBoardItem.type}`}>
      <td>
        <ScoreItem>{scoreBoardItem.type}</ScoreItem>
      </td>
      <td>{scoreBoardItem.quantity}</td>
      <td>{scoreBoardItem.points}</td>
    </TableDataRow>
  ));

  return (
    <>
      <Table>
        <thead>{scoreBoardHeaderRow}</thead>
        <tbody>{scoreBoardDataRows}</tbody>
      </Table>
      {!hasStarted && <SubHeading>Collect items!</SubHeading>}
    </>
  );
};
