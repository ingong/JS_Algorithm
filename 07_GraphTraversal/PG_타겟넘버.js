function solution(numbers, target) {
  let answer = 0;
  DFS(0, 0);

  function DFS(calculate, level) {
    if (level < numbers.length) {
      DFS(calculate + numbers[level], level + 1);
      DFS(calculate - numbers[level], level + 1);
    } else {
      if (calculate === target) answer += 1;
      return;
    }
  }

  return answer;
}
