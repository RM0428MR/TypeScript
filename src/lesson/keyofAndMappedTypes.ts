// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
const STATUS = {
  active: 'アクティブ',
  inactive: '非アクティブ',
  pending: '保留中',
};

function getStatusLabel(key: StatusKey): string {
  return STATUS[key];
}

console.log(getStatusLabel('active'));
console.log(getStatusLabel('pending'));

// 問題 2
type User = {
  id: number;
  name: string;
  email: string;
};

const frozenUser: Freeze<User> = {
  id: 1,
  name: '山田太郎',
  email: 'taro@example.com',
};

frozenUser.name = '佐藤花子';