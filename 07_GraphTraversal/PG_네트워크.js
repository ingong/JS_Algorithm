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
