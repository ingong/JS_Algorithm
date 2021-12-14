// 동빈나 DP 연습문제 1
const input = [];
const dp = new Array(30001).fill(0);
const createDPArray = number => {
  for (let i = 2; i < number + 1; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 5 === 0) dp[i] = Math.min(dp[i], dp[i / 5] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  return dp[number];
};

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const number = input[0];
    const answer = createDPArray(number);
    console.log(answer);
  });
