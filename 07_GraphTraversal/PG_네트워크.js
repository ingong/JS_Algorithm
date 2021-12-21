// 처음 풀이
function solution(n, computers) {
  const visited = Array.from({ length: n }, () => false);
  let answer = 0;

  function DFS(node) {
    computers[node].forEach((v, i) => {
      if (v && !visited[i]) {
        visited[i] = true;
        DFS(i);
      }
    });
  }

  for (let i = 0; i < n; i += 1) {
    if (visited[i]) continue;
    answer += 1;
    DFS(i);
  }

  return answer;
}

// 다시 푼 풀이
const DFS = (computers, visited, node) => {
  computers[node].forEach((v, i) => {
    if (!v || visited[i]) return;
    visited[i] = true;
    DFS(computers, visited, i);
  });
};

function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let answer = 0;

  for (let i = 0; i < n; i += 1) {
    if (visited[i]) continue;
    answer += 1;
    DFS(computers, visited, i);
  }

  return answer;
}
