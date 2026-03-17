// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
type FormData = {};

// 下記がすべてエラーにならないことを確認しましょう
const form1: FormData = { name: '太郎', email: 'taro@example.com' };
const form2: FormData = { name: '花子', email: 'hanako@example.com', age: 25 };
const form3: FormData = { name: '次郎', email: 'jiro@example.com', age: 30, address: '東京都渋谷区' };

// 問題 2
type SystemSettings = {};

const settings: SystemSettings = {
  appName: 'TaskManager',
  maxRetryCount: 3,
  debugMode: true,
};

// 下記がすべてコンパイルエラーになることを確認しましょう
settings.appName = 'OtherApp';
settings.maxRetryCount = 5;
