// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
const status1: Status = 'success';
const status2: Status = 'error';
const status3: Status = 'loading';

// 問題 2
const getMessage = (light) => {
  if (light === 'red') {
    return '止まれ';
  } else if (light === 'yellow') {
    return '注意';
  } else {
    return '進め';
  }
};

console.log(getMessage('red'));
console.log(getMessage('green'));