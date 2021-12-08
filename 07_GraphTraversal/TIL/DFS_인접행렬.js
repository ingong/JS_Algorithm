let n = 5;
let m = 9;
let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

function solution(n, m, arr) {
  let visited = Array.from({ length: n + 1 });
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let path = [];
  let cnt = 0;
  for (let [a, b] of arr) graph[a][b] = 1;

  function DFS(v) {
    if (v === n) {
      console.log(path);
      cnt++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (!visited[i] && graph[v][i]) {
          visited[i] = 1;
          path.push(i);
          DFS(i);
          visited[i] = 0;
          path.pop();
        }
      }
    }
  }

  visited[1] = 1;
  path.push(1);
  DFS(1);
  return cnt;
}

console.log(solution(n, m, arr));
