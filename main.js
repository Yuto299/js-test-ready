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
// let fruits = ['apple', 'banana', 'orange'];

// fruits.splice(2, 0, 'peach');
// console.log(fruits); // ['apple', 'banana', 'peach', 'orange']

// // 先頭に置換
// let fruits2 = ['apple', 'banana', 'orange'];
// fruits2.splice(0, 1, 'peach');
// console.log(fruits2); // ['peach', 'banana', 'orange']

// //  先頭を削除
// let fruits3 = ['apple', 'banana', 'orange'];
// fruits3.splice(0, 1);
// console.log(fruits3); // ['banana', 'orange']

// // 最大値・最小値を求める
// const arry = [1, 2, 3, 4, 5];
// const maxNum = Math.max(...arry);
// console.log(maxNum);

// const arry2 = [1, 2, 3, 4, 5];
// const minNum = Math.min(...arry2);
// console.log(minNum);

// 検索する (find)
// const arr = [1, 2, 3, 4, 5];
// const targert = arr.find((t) => t > 4);
// console.log(targert); // 5

// const arr2 = [1, 3, 5, 2, 6];
// const targets = arr2.find((t) => t > 7);
// console.log(targets);

// // 配列から条件を満たす要素のみを抽出し、新しく配列を作成
// const arr = ['apple', 'banana', 'orange', 'peach', 'grape', 'kiwi'];
// const newArry = arr.filter((str) => str.length < 5);
// console.log(newArry);

// // 文字列のソート
// const arr = ['dog', 'cat', 'elephant', 'ant', 'bird'];
// const sortedArr = arr.sort();
// console.log(sortedArr); // ['ant', 'bird', 'cat', 'dog', 'elephant']

// // 昇順
// const arr = [5, 3, 8, 1, 2];
// const sortedArr = arr.sort((a, b) => a - b);
// console.log(sortedArr);

// // 降順
// const arry = [5, 3, 8, 1, 2];
// const sortedArry = arry.sort((a, b) => b - a);
// console.log(sortedArry);

// // 値が配列に含まれる場合はtrueを返し、含まれなければfalseを返す
// const arry = ['a', 'b', 'c', 'd'];
// const result = arry.includes('e');
// console.log(result); // true

// // 結合
// const arr = ['a', 'b', 'c'];
// const newArr = arr.join(' ');
// console.log(newArr);

// // 文字列の反転
// const str = 'abcde';
// const newStr = str.split('').reverse().join(''); //割って、反対にして、またくっつける
// console.log(newStr); // edcba

// ある文字列が含まれるか調べる
const text = 'Imagine all the people living for today';
const target = /people/g;
const result = text.match(target);
console.log(result); // ['people']
