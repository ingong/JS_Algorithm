function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => a[1] - b[1]);
  let cameraLocation = routes[0][1];

  routes.forEach(([start, end], index) => {
    if (index !== 0) {
      if (cameraLocation < start) {
        cameraLocation = end;
        answer += 1;
      }
    }
  });

  return answer;
}
