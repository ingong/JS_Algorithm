function solution(record) {
  const idDic = {};
  const result = record.filter(value => value.split(' ')[0] !== 'Change');

  record.forEach(value => {
    const [action, id, nickname] = value.split(' ');
    if (action !== 'Leave') idDic[id] = nickname;
  });

  return result.map(value => {
    const [action, id] = value.split(' ');
    return action === 'Enter' ? `${idDic[id]}님이 들어왔습니다.` : `${idDic[id]}님이 나갔습니다.`;
  });
}
