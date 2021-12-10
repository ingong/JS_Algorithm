function solution(board) {
  let queue = [[[0, 1], [0, 0], 'H', 0]];

  while (queue.length) {
    let [x, y, status, time] = queue.pop();
    if (x[1] === board.length - 1 && y[1] === board.length - 1) return time;
    if (status === 'H') {
      if (x[1] + 1 < board.length && !board[y[1]][x[1]])
        queue.push([[x[0] + 1, x[1] + 1], [y[0], y[1]], 'H', time + 1]);
      if (y[0] + 1 < board.length && !board[y[1]][x[1]] && !board[y[1] + 1][x[1]]) {
        queue.push([[x[1], x[1]], [y[1], y[1] + 1], 'V', time + 1]); // 왼쪽을 축으로 회전
        // queue.push([[x[0], x[0]],[y[0], y[0] + 1], 'V', time + 1]) // 오른쪽을 축으로 회전
      }
    } else {
      if (y[1] + 1 < board.length && !board[y[1] + 1][x[1]])
        queue.push([[x[0], x[1]], [y[0] + 1, y[1] + 1], 'V', time + 1]);
      if (x[0] + 1 < board.length && !board[y[0]][x[0] + 1] && !board[y[1]][x[1] + 1]) {
        queue.push([[x[0], x[1] + 1], [y[1], y[1]], 'H', time + 1]); // 위를 축으로 회전
        // queue.push([[x[0], x[0] + 1],[y[0], y[0]],'H', time + 1])
      }
    }
  }
}
