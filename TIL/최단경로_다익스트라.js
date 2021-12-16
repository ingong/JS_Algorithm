// 프로그래머스 : 가장 먼 노드 참고
const dijkstra = (n, adj) => {
  const dist = Array(n + 1).fill(false);
  const queue = [];

  queue.push({ to: 1, cost: 0 });
  dist[1] = 0;

  while (queue.length !== 0) {
    const { to, cost } = queue.shift();

    adj[to].forEach(nextNode => {
      const nextCost = cost + 1;
      if (dist[nextNode] === false) {
        dist[nextNode] = nextCost;
        queue.push({ to: nextNode, cost: nextCost });
      }
    });
  }

  const max = Math.max(...dist);
  return dist.filter(num => num === max).length;
};
