import React from "react";

import { ScoreBoardItem } from "../duck";

import {
  Table,
  TableHeaderRow,
  TableDataRow,
  ScoreItem,
} from "../components/primitives";

interface ScoreTableProps {
  scoreBoard: ScoreBoardItem[];
}

export const ScoreTable: React.FC<ScoreTableProps> = ({ scoreBoard }) => {
  const scoreTableHeaderRow = (
    <TableHeaderRow>
      <th>Item</th>
      <th>Qty</th>
      <th>Score</th>
    </TableHeaderRow>
  );

  const scoreTableDataRows = scoreBoard.map((scoreBoardItem, index) => (
    <TableDataRow key={`${index}-${scoreBoardItem.type}`}>
      <td>
        <ScoreItem>{scoreBoardItem.type}</ScoreItem>
      </td>
      <td>{scoreBoardItem.quantity}</td>
      <td>{scoreBoardItem.points}</td>
    </TableDataRow>
  ));

  return (
    <Table>
      <thead>{scoreTableHeaderRow}</thead>
      <tbody>{scoreTableDataRows}</tbody>
    </Table>
  );
};
