// 二乗計算をする「（関数）」を用意する
const calculateSquare = (num) => {
  // 関数スコープで計算を行う
  const result = num * num;

  // 計算結果をreturnで出力する
  return result;
}

// 引数に「10」を渡して実行し、戻ってきた結果をコンソールに表示
console.log(calculateSquare(10));