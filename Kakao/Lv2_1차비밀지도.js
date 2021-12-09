const toZip = arrays => arrays[0].map((_, i) => arrays.map(array => array[i]));
const toBinary = (value, n) => value.toString(2).padStart(n, 0);

function solution(n, arr1, arr2) {
  const zipList = toZip([arr1, arr2]);
  const binaryList = zipList.map(v => v[0] | v[1]).map(v => toBinary(v, n));
  return binaryList.map(v => v.replace(/1/gi, '#').replace(/0/gi, ' '));
}

// padStart 앞에서 부터 특정 개수만큼 특정 문자열로 대치할 수 있다.
// JS 에서 | 연산 또는 & 연산을 위해서는 2진수가 아닌 10진수에서 연산을 수행할 수 있다.
// 이후에 toString(2) 를 활용해서 2진수로 변환한다
