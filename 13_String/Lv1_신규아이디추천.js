function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  return answer.padEnd(3, answer[answer.length - 1]);
}
