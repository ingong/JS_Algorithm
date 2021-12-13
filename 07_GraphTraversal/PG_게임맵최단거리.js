function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = new Array(n).fill(0).map(() => new Array(m).fill(0));

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const queue = [];

  queue.push({ x: 0, y: 0, dist: 1 });

  while (queue.length) {
    const { x, y, dist } = queue.shift();
    if (x === n - 1 && y === m - 1) return dist;

    for (let i = 0; i < dx.length; i++) {
      const next = { x: x + dx[i], y: y + dy[i], dist: dist + 1 };
      if (next.x < 0 || next.x >= n || next.y < 0 || next.y >= m) continue;
      if (!maps[next.x][next.y] || visited[next.x][next.y]) continue;
      visited[next.x][next.y] = true;
      queue.push(next);
    }
  }

  return -1;
}

// 왜 처음에 효율성 테스트를 통과하지 못했는가?
// 방문 체크를 기존에는 꺼낸 다음 진행했다. 넣기 전에 방문 처리를 한 이후에 효율성 테스트를 통과함.
// [A, 0, 0],
// [B, C, 0],
// [D, E, F],
// 다음과 같은 maps arguments 가 전달 됐을 때,
// A -> B 순으로 큐에 넣었다가 나온다.
// 이후에 C 와 D 가 들어가고, 만약 방문처리를 queue 에서 나올 때 한다면
// C 와 D 모두 E 를 넣게 된다. 왜냐하면 C 를 먼저 처리한다고 했을 때, C 가 나온 후 E 는 queue 에 들어가있지만 방문 처리를 해주지 않았다.
// D 가 처리될 때 E 는 방문되어있지 않기 때문에 다시 E 를 큐에 넣는다.
// 아마 이걸 의도한 것 같다. queue 에 입어넣을 때 같이 방문처리를 해주니 효율성 테스트를 통과했다.
// 그렇다면 모든 BFS 문제는 queue 에 집어넣을 때 방문처리를 해줘야할까? 아니면 문제 유형에 따라 다를까? 궁금하다
