import { BoardItem, ScoringDefinition } from "./duck";

export const currentDefinitions: ScoringDefinition[] = [
  { type: "A", points: 50, bonus: [0, 0, 50] },
  { type: "B", points: 30, bonus: [0, 30] },
  { type: "C", points: 20, bonus: [] },
  { type: "D", points: 15, bonus: [] },
];

export const startBoard: BoardItem[] = [
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
  "A",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "D",
  "A",
];