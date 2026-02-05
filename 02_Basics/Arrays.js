const arr = [1,2,3,4,5]

// console.log(arr[2]);

// in JS when arrays are copied, it creates a shallow copy (new varaiable pointing same reference)
// So any change in copy array will always be reflected in original array also

const copy = arr;
copy[2] = 77;
// console.log(copy[2]);
// console.log("Arr : ",arr);
// console.log(typeof arr); // Object

// // Array methods 
// console.log(arr.length);
// arr.push(23);
// arr.pop() // -> pops the last element
// arr.unshift(9) // -> inserts the elemnt at start of array
// arr.shift() // -> delete the first element 
// console.log("Arr : ",arr);
// console.log(arr.includes(77));
// console.log(arr.indexOf(77));

// const newarr = arr.join(); // -> make a string out of an array "1,2,77,4,5"
// console.log(typeof newarr);
// console.log(newarr);

console.log("A : ",arr);

const s1 = arr.slice(1,3); // -> last index not included and the copy subarray is generated
console.log(s1);
console.log("B after slice: ",arr);

const s2 = arr.splice(1,3); // -> last index is included and the original array reshaped by slicing the given range
console.log(s2);
console.log("C after splice: ",arr);