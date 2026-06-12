// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
function describeValue(value: string | number | null): string {}

console.log(describeValue('hello'));
console.log(describeValue(42));
console.log(describeValue(null));

// 問題 2
function displayMessage(value: Error | string): void {}

displayMessage(new Error('接続に失敗しました'));
displayMessage('処理が完了しました');
