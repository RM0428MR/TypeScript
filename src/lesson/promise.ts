// ここにコードを書きながら確認しましょう！

function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    resolve('hello');
  });
}

// .then()のコールバック引数valueはstring型として推論される
fetchMessage().then((value) => {
  console.log(value.toUpperCase()); // string型固有のメソッドを安全に実行可能
});







// 練習問題
// 問題 1

type UserProfile = {
  id: number;
  name: string;
  birthday: string;
  address: string;
};

function fetchUserProfile(): Promise<UserProfile> {
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

function clearCache(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
}
