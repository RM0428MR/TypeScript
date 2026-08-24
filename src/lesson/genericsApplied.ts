// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
type Product = {
  id: number;
  name: string;
  price: number;
};

type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
};
const productList: Paginated<Product> = {
  items: [
    { id: 1, name: 'TypeScript入門', price: 2800 },
    { id: 2, name: '上級TypeScript', price: 3200 },
  ],
  total: 20,
  page: 1,
};

console.log(productList.items[0]?.name);
console.log(productList.total);

// 問題 2
type User = {
  id: number;
  name: string;
};
type SuccessResponse<T> = {
  status: 'success';
  data: T;
};
type ErrorResponse = {
  status: 'error';
  message: string;
};
type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

function handleUserResponse(response: ApiResponse<User>) {
  if (response.status === 'success') {
    console.log(`取得成功: ${response.data.name}`);
  } else {
    console.log(`取得失敗: ${response.message}`);
  }
}

handleUserResponse({ status: 'success', data: { id: 1, name: '山田太郎' } });
handleUserResponse({ status: 'error', message: 'ユーザーが見つかりません' });