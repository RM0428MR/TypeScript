import jsdom = require("jsdom");

// Node.jsに仮想的なDOM環境を作成
const dom = new jsdom.JSDOM(`
    <input type="email" id="email-input" value="test@example.com">
`);
const document = dom.window.document;

// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題1
const element = document.getElementById('email-input')



// 問題2
function printEmailValue() {
  const element = document.getElementById('email-input');

  // ここに回答を記述してください
}

printEmailValue();
