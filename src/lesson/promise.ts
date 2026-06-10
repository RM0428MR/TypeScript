// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
function fetchUserProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randInt: number = Math.round(Math.random());
      if (randInt) {
        resolve({
          id: 1,
          name: 'John Doe',
          birthday: '1995-09-10',
          address: '東京都千代田区千代田1-1',
        });
      }
    }, 1000);
  });
}

fetchUserProfile()
  .then((val) => {
    console.log('ユーザープロフィール:', val.name);
  });

function clearCache() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
}
