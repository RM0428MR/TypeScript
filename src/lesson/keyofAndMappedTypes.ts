// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
const STATUS = {
  active: 'アクティブ',
  inactive: '非アクティブ',
  pending: '保留中',
};

type StatusKey = keyof typeof STATUS;

function getStatusLabel(key: StatusKey): string {
  return STATUS[key];
}

console.log(getStatusLabel('active'));
console.log(getStatusLabel('pending'));
console.log(getStatusLabel('unknown'));

// 問題 2
type User = {
  id: number;
  name: string;
  email: string;
};
type Freeze<T> = {
  readonly [K in keyof T]: T[K];
};

const frozenUser: Freeze<User> = {
  id: 1,
  name: '山田太郎',
  email: 'taro@example.com',
};

frozenUser.name = '佐藤花子';