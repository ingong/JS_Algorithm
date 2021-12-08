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
  let graph = Array.from(Array(n + 1), () => Array());
  let visited = Array.from({ length: n + 1 }, () => 0);
  let cnt = 0;
  let path = [];

  for (let [a, b] of arr) graph[a].push(b);

  function dfs(v) {
    if (v === n) {
      console.log(path);
      cnt++;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (!visited[graph[v][i]]) {
          visited[graph[v][i]] = 1;
          path.push(graph[v][i]);
          dfs(graph[v][i]);
          visited[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  visited[1] = 1;
  dfs(1);
  return cnt;
}

solution(n, m, arr);
