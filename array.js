let arr = [3, 4, 5, 6, 7, 8];
console.log(arr);
console.log(arr.pop());
let x = arr.shift();
console.log(x);
console.log(arr);
console.log(arr.unshift(51));
let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];
let arrf = arr1.concat(arr2);
console.log(arrf);

let arr3 = [3,2,1,5,4,9,11,8];
let sliced_arr = arr3.slice(2, 5);
console.log(arr3);
console.log(sliced_arr);
arr4=[3,2,1,5,4,9,11,8];
console.log(arr4.splice(4, 1));
console.log(arr4.splice(4, 1, 51));
str=arr4.toString();
console.log(str)
flat_arr=arr.flat();
console.log(flat_arr);