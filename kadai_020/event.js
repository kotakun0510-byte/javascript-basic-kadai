// 操作したいHTML要素を変数に入れる
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタン（btn）が「クリック」された時の動きを予約する
btn.addEventListener('click', () => {

  // クリックされたら、text（h2要素）の中身を書き換える
  text.textContent = 'ボタンをクリックしました';
})