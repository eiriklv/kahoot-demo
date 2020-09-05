export function createPartitions<T>(input: T[]): T[][] {
  return input
    .slice()
    .sort()
    .reduce((output: T[][], item: T) => {
      return !output.length || item !== output[output.length - 1][0]
        ? [...output, [item]]
        : [
            ...output.slice(0, output.length - 1),
            [...output[output.length - 1], item],
          ];
    }, []);
}
