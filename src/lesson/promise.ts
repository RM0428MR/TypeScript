// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題1
type PromiseUser = {
  id: number,
  name: string,
  birthday: string,
  address: string,
}

function fetchUserProfile(): Promise<PromiseUser> {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      // 0,1のどちらかの数をランダムに生成
      const randInt: number = Math.round(Math.random())
      if (randInt) {
        const john: PromiseUser = {
          id: 1,
          name: 'John Doe',
          birthday: '1995-09-10',
          address: '東京都千代田区千代田1-1'
        };
        resolve(john);
      }
      reject("Userの取得に失敗しました。")
    }, 1000)
  })
}
