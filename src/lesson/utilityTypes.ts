// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
};

const summary: ProductSummary = { name: 'TypeScript入門', stock: 10 };
const product: ProductWithoutStock = {
  id: 1,
  name: 'TypeScript入門',
  price: 2800,
  description: 'TypeScriptの基礎を学べる入門書'
};

console.log(summary.name);
console.log(product.price);

// 問題 2
type Task = {
  id: number;
  title: string;
  done: boolean;
};

type Priority = 'high' | 'medium' | 'low';

function updateTask(id: number, changes) {
  console.log(`タスク ${id} を更新`, changes);
}

const priorityLabels = {
  high:   '高',
  medium: '中',
};

updateTask(1, { done: true });
updateTask(2, { title: '買い物', done: false });
console.log(priorityLabels.high);