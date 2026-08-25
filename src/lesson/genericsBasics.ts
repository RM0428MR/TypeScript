// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1


function getOrDefault<T>(value: T | null, defaultValue: T): T {
  if (value === null) {
    return defaultValue;
  }
  return value;
}

console.log(getOrDefault('TypeScript', '名無し'));
console.log(getOrDefault(null, '名無し'));
console.log(getOrDefault(42, 0));
console.log(getOrDefault(null, 0));

// 問題 2

function compact<T>(items: (T | null)[]): T[] {
  return items.filter((item): item is T => item !== null);
}

console.log(compact(['Alice', null, 'Bob', null, 'Carol']));
console.log(compact([1, null, 3, null, 5]));