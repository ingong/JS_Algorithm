function solution(n, t, m, p) {
  let answer = '';
  const numberList = Array.from({ length: t * m }, (_, i) => i);
  const toDigitList = numberList.map(v => v.toString(n).toUpperCase()).reduce((a, b) => a + b);
  for (let i = p - 1; i < t * m; i += m) answer += toDigitList[i];
  return answer;
}
