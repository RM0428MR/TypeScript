// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
function describeValue(value: unknown): void {
  if (typeof value === 'string') {
    console.log(`文字列: ${value}`);
  } else if (typeof value === 'number') {
    console.log(`数値: ${value}`);
  } else if (typeof value === 'boolean') {
    console.log(`真偽値: ${value}`);
  } else {
    console.log('不明な型です');
  }
}

describeValue('TypeScript');
describeValue(42);
describeValue(true);
describeValue(null);

// 問題 2
function safeGetLength(input: unknown): number {
  if (typeof input === 'string'){
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    return 0;
  }
}

console.log(safeGetLength('TypeScript'));
console.log(safeGetLength([1, 2, 3]));
console.log(safeGetLength(42));