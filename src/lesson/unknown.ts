// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
function describeValue(value: unknown): void {}

describeValue('TypeScript');
describeValue(42);
describeValue(true);
describeValue(null);

// 問題 2
function safeGetLength(input: unknown): number {}

console.log(safeGetLength('TypeScript'));
console.log(safeGetLength([1, 2, 3]));
console.log(safeGetLength(42));