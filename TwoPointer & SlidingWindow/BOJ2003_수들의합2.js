const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('Test_Case/test.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function solution(N, M, arr) {
  let start = 0,
    end = 0,
    answer = 0,
    sum = 0;

  while (end !== N + 1) {
    if (sum < M) sum += arr[end++];
    else sum -= arr[start++];

    if (sum === M) answer++;
  }

  console.log(answer);
}

solution(N, M, arr);
