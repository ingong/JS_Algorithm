// 두 개를 합쳐서 비교하는거 신기하다 -> 내림차순이면 b - a / 오름차순이면 a - b
function solution(numbers) {
  numbers.sort((a, b) => b.toString() + a.toString() - (a.toString() + b.toString()));
  return numbers[0] === 0 ? '0' : numbers.join('');
}
