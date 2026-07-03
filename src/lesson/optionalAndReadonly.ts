// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
const form1: UserFormData = { name: '太郎', email: 'taro@example.com' };
const form2: UserFormData = { name: '花子', email: 'hanako@example.com', age: 25 };
const form3: UserFormData = { name: '次郎', email: 'jiro@example.com', age: 30, address: '東京都渋谷区' };

// 問題 2
const settings: SystemSettings = {
  appName: 'TaskManager',
  maxRetryCount: 3,
  debugMode: true,
};

settings.appName = 'OtherApp';
settings.maxRetryCount = 5;
