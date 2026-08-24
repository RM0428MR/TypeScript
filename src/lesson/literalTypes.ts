// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
type Status = 'success' | 'error' | 'loading';

const status1: Status = 'success';
const status2: Status = 'error';
const status3: Status = 'loading';

// 問題 2
type TrafficLight = 'red' | 'yellow' | 'green';
const getMessage = (light: TrafficLight) => {
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