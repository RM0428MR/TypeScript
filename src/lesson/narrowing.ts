// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
function describeValue(value: string | number | null): string {
  if (value === null) {
    return '値がありません。';
  } else if (typeof value === 'string') {
    return `文字列の値: ${value}`;
  } else {
    return `数値の値: ${value}`;
  }
}

console.log(describeValue('hello'));
console.log(describeValue(42));
console.log(describeValue(null));

// 問題 2
function displayMessage(value: Error | string): void {
  if (value instanceof Error) {
    console.error(`エラー: ${value.message}`);
  } else {
    console.log(`メッセージ: ${value}`);
  }
}

displayMessage(new Error('接続に失敗しました'));
displayMessage('処理が完了しました');
