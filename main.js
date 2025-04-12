// switch文
// const subject = 'Math';

// switch (subject) {
//   case 'English':
//     console.log('英語');
//     break;
//   case 'Math':
//     console.log('数学');
//     break;
//   case 'Science':
//     console.log('科学');
//     break;
//   default:
//     console.log('その他の科目');
// }

// // 整数の桁数
// const num = 12345;
// const numLength = num.toString().length;
// console.log(numLength);

// // 要素数を求める
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// // 要素数と初期値を指定して配列を作成
// let arry = Array(5).fill(0);
// console.log(arry);

// 末尾に要素を追加
// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr); // [1, 2, 3, 4, 5, 6]

// // 末尾の要素を削除
// const arr = [1, 2, 3, 4, 5];
// const popped = arr.pop();

// console.log(arr);
// console.log(popped);

// 2番目に要素を追加
let fruits = ['apple', 'banana', 'orange'];

fruits.splice(2, 0, 'peach');
console.log(fruits); // ['apple', 'banana', 'peach', 'orange']

// 先頭に置換
let fruits2 = ['apple', 'banana', 'orange'];
fruits2.splice(0, 1, 'peach');
console.log(fruits2); // ['peach', 'banana', 'orange']

//  先頭を削除
let fruits3 = ['apple', 'banana', 'orange'];
fruits3.splice(0, 1);
console.log(fruits3); // ['banana', 'orange']
