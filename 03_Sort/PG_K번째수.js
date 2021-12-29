function solution(array, commands) {
  return commands.map(([start, end, order]) => {
    return array
      .filter((_, i) => start - 1 <= i && i <= end - 1)
      .sort((a, b) => a - b)
      .find((_, i) => i === order - 1);
  });
}
