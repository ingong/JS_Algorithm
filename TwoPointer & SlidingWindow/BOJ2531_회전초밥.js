const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('Test_Case/test.txt').toString().trim().split('\n');
const [N, d, k, c] = input[0].split(' ').map(Number);
const rotatingDish = input.slice(1).map(Number);

function solution(N, d, k, c, rotatingDish) {
  let pointer = 0;
  let answer = -Infinity;
  let count = 0;
  const newRotatingDish = rotatingDish.concat(rotatingDish.slice(0, k));
  while (pointer !== N) {
    const set = new Set();
    for (let i = pointer; i < pointer + k; i++) {
      set.add(newRotatingDish[i]);
    }
    count = set.size;
    if (!set.has(c)) count++;
    answer = Math.max(answer, count);
    pointer += 1;
  }
  console.log(answer);
}

solution(N, d, k, c, rotatingDish);
