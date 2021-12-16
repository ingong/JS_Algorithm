function solution(n, s, a, b, fares) {
  let answer = Infinity;
  const adj = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
  fares.forEach(([start, end, cost]) => {
    adj[start][end] = cost;
    adj[end][start] = cost;
  });

  for (let mid = 1; mid <= n; mid++) {
    for (let start = 1; start <= n; start++) {
      for (let end = 1; end <= n; end++) {
        if (start === end) {
          adj[start][end] = 0;
        }

        if (adj[start][end] > adj[start][mid] + adj[mid][end]) {
          adj[start][end] = adj[start][mid] + adj[mid][end];
          adj[end][start] = adj[start][mid] + adj[mid][end];
        }
      }
    }
  }

  for (let mid = 1; mid <= n; mid++) {
    answer = Math.min(answer, adj[s][mid] + adj[mid][a] + adj[mid][b]);
  }

  return answer;
}
