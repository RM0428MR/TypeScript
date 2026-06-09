// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
const profile: Profile = {
  name: '山田太郎',
  age: 30,
  email: 'taro@example.com',
  phone: '090-1234-5678',
};

console.log(profile.name);
console.log(profile.email);

// 問題 2
function showProduct(product: ProductWithStock) {
  const stockStatus = product.inStock ? '在庫あり' : '在庫なし';
  console.log(`${product.name}: ${product.price}円 (${stockStatus})`);
}

showProduct({ id: 1, name: 'TypeScript入門', price: 2800, stock: 10, inStock: true });
showProduct({ id: 2, name: '上級TypeScript', price: 3200, stock: 0, inStock: false });