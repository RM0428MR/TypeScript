// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
function showScore(score: number | string) {
  console.log(`スコア: ${score}`);
}

function showResult(result: boolean | null) {
  console.log(`結果: ${result}`);
}

showScore(100);
showScore('満点');

showResult(true);
showResult(null);

// 問題 2
type UserProfile = {
  name: string;
  age: number | string;
  isActive: boolean | null;
};
const user1: UserProfile = { name: '太郎', age: 25, isActive: true };
const user2: UserProfile = { name: '花子', age: '非公開', isActive: false };
const user3: UserProfile = { name: '次郎', age: 30, isActive: null };