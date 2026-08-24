// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1

type Product = {
  id: number;
  name: string;
  price: number;
};
const apple: Product = { id: 1, name: 'りんご', price: 200 };
const orange: Product = { id: 2, name: 'みかん', price: 100 };

// 問題 2
type Address = {
  zipCode: string;
  city: string;
};
type Company = {
  name: string;
  location: Address;
};

const company: Company = {
  name: '株式会社サンプル',
  location: {
    zipCode: '100-0001',
    city: '東京都千代田区',
  },
};

// 問題 3
type Book = {
  id: number;
  name: string;
  price: number;
  category?: string; // 任意のプロパティ
};

const book1: Book = { id: 1, name: '吾輩は猫である', price: 600, category: '小説' };
const book2: Book = { id: 2, name: '走れメロス', price: 500, category: '小説' };
