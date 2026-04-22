// HTMLから操作したい要素（ボタンとテキスト）を定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックした時のイベント処理を登録する
btn.addEventListener('click', () => {
  // 【非同期処理】setTimeoutを使って、2000ミリ秒（2秒）待機させる
  setTimeout(() => {

    // 2秒後に実行される処理：h2要素のテキストを書き換える 2秒後に表示
    text.textContent = 'ボタンをクリックしました';
  }, 2000); 
});