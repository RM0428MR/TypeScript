// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => {
  return `こんにちは、${name}さん`;
};

add(1, 2);
greet('太郎');

// 問題 2

function showProfile(name: string, age: number): void {
  console.log(name, age);
}

const logError = (message: string) => {
  console.log(message);
}
showProfile('太郎', 25);
logError('接続に失敗しました');
