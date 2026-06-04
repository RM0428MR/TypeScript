// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
function handleKeyPress(event) {
  console.log(`押されたキー: ${event.key}`);
}

const inputField = document.getElementById('text-input');
if (inputField) {
  inputField.addEventListener('keydown', handleKeyPress);
}

// 問題 2
