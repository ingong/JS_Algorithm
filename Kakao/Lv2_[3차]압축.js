function solution(msg) {
  const AtoZList = Array.from(Array(26), (_, i) => i + 65).map(v => String.fromCharCode(v));
  const answer = [];

  while (msg.length > 0) {
    const maxLen = Math.max(...AtoZList.map(v => v.length));
    const wordCandidate = Array.from({ length: maxLen }, (_, i) => maxLen - i).map(v =>
      msg.slice(0, v)
    );
    const wordInList = wordCandidate.filter(v => AtoZList.includes(v));
    const firstWord = wordInList[0];
    answer.push(Array.from(AtoZList).findIndex(v => v === firstWord) + 1);
    AtoZList.push(msg.slice(0, firstWord.length + 1));
    msg = msg.substring(firstWord.length);
  }

  return answer;
}

// substring : string 객체의 시작 인덱스로부터 종료 인덱스 전까지의 문자열의 부분 문자열 반환
// const str = 'Mozilla'
// console.log(str.substring(1, 3)) oz
// console.log(str.substring(2)) zilla
