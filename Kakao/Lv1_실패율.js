// 첫 번째 풀이
function solution(N, stages) {
  const tables = Array.from({ length: N }, (v, i) => i + 1);
  return tables
    .map((value, i) => {
      const onUsers = stages.filter(stage => stage === +value).length;
      const onOrPassUsers = stages.filter(stage => stage > +value - 1).length;
      return { [value]: onUsers / onOrPassUsers };
    })
    .sort((a, b) => Object.values(b) - Object.values(a))
    .map(v => +Object.keys(v))
    .flatMap(v => v);
}
