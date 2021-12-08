let s = 5;
let target = 14;

function solution(s, target) {
  let visited = Array.from({ length: target + 1 }, () => 0);
  let queue = [];

  visited[s] = 1;
  queue.push([s, 0]);

  while (queue.length) {
    let [v, p] = queue.shift();
    console.log(`v : ${v}, p : ${p}`);

    for (let x of [v - 1, v + 1, v + 5]) {
      if (x === target) return p + 1;
      if (!visited[x] && x >= 1 && x <= 10000) {
        visited[x] = 1;
        queue.push([x, p + 1]);
      }
    }
  }
}

console.log(solution(s, target));
