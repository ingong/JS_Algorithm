const text = 'abcdefg';
const regexforB = /B/gi;

console.log(text.replace(regexforB, 'x'));

function replaceWithAddingBrace(match) {
  return '{' + match + '}';
}

// parameter 로 값을 넘기지 않아도 된다.
console.log(text.replace(/b/gi, replaceWithAddingBrace));
