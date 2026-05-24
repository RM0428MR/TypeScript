// ここにコードを書きながら確認しましょう！









// 練習問題
// 問題 1
function showResult(result: Result) {
  if (result.status === 'success') {
    console.log(`成功: ${result.data}`);
  } else {
    console.log(`失敗: ${result.message}`);
  }
}

showResult({ status: 'success', data: 'ユーザー情報を取得しました' });
showResult({ status: 'error', message: 'ネットワークエラーが発生しました' });

// 問題 2
function showPageState(page: PageState) {
  switch (page.state) {
    case 'loading':
      console.log('読み込み中...');
      break;
    case 'loaded':
      console.log(`表示内容: ${page.content}`);
      break;
    case 'failed':
      console.log(`エラー: ${page.error}`);
      break;
  }
}

showPageState({ state: 'loading' });
showPageState({ state: 'loaded', content: 'ページの内容です' });
showPageState({ state: 'failed', error: 'ページが見つかりません' });