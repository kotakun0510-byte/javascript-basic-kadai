// 「時間（Dateオブジェクト）」のインスタンスを作成
// 実行した瞬間の年、月、日、時、分、秒などの全データ
const today = new Date();

// 「年」を抜き出す
// 4桁の西暦を取得
const year = today.getFullYear();

// 「月」を抜き出す
// 月は0から始まる（1月が0、2月が1）ため、「+ 1」します
const month = today.getMonth() + 1;

// 「日」を抜き出す
// 1日〜31日の数字を取得します
const date = today.getDate();

// 抜き出した数字と文字を結合して、コンソールに表示する
// 文字列の結合を使って「〇〇年〇〇月〇〇日」の形に整える
console.log(year + '年' + month + '月' + date + '日');