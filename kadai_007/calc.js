// 1以上の正の数を変数numに代入
let num = 15;

// 3と5の両方を倍数であるのかどうかを最初でに判定する
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}else if (num % 3 === 0) {
  // 3の倍数の場合
  console.log('3の倍数です');
}else if (num % 5 === 0) {
  // 5の倍数の場合
  console.log('5の倍数です');
}else {
  // 上記のいずれでもない場合　変数numの値を出力する
  console.log(num)
}
