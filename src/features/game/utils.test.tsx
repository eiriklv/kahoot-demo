import { createPartitions } from "./utils";

describe("createPartitions", () => {
  test("partitions correctly when input is filled with different values", () => {
    const input = ["A", "B", "A", "C", "B", "A"];

    const output = createPartitions(input);

    expect(output).toEqual([["A", "A", "A"], ["B", "B"], ["C"]]);
  });

  test("partitions correctly when input is filled with the same values", () => {
    const input = ["A", "A", "A"];

    const output = createPartitions(input);

    expect(output).toEqual([["A", "A", "A"]]);
  });

  test("partitions correctly when input is empty", () => {
    const input: string[] = [];

    const output = createPartitions(input);

    expect(output).toEqual([]);
  });
});
