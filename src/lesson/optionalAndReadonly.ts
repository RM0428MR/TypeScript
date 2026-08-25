// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
type UserFormData = {
  name: string;
  email: string;
  age?: number; // 任意のプロパティ
  address?: string; // 任意のプロパティ
};
const form1: UserFormData = { name: '太郎', email: 'taro@example.com' };
const form2: UserFormData = { name: '花子', email: 'hanako@example.com', age: 25 };
const form3: UserFormData = { name: '次郎', email: 'jiro@example.com', age: 30, address: '東京都渋谷区' };

// 問題 2
type SystemSettings = {
  readonly appName: string; // 読み取り専用プロパティ
  readonly maxRetryCount: number; // 読み取り専用プロパティ
  readonly debugMode?: boolean; // 読み取り専用プロパティ
};
const settings: SystemSettings = {
  appName: 'TaskManager',
  maxRetryCount: 3,
  debugMode: true,
};

settings.appName = 'OtherApp';
settings.maxRetryCount = 5;
