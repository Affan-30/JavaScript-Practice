// let score = undefined

// console.log(typeof score);

// let num = Number(score)
// console.log(typeof num);
// console.log(num);

// let islog = 1;

// let s = "Affan SHaikh"
// let bool = Boolean(s);

// console.log(bool);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); // 32

// console.log(+true); //1

// let count = 100
// console.log(count++) //100
// console.log(count) // 101

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); //true

// console.log('1' === 1);

// Non Primitive
//  Array, Objects, Functions
let array = ["Affan", "Sarfraz", "Shaikh"]

const obj = {
    name : "Affan",
    age : 20,
    city: "Solapur"
}

const func = function(){
    console.log("The function is being called!");
}

// let score = undefined

// console.log(typeof score);

// let num = Number(score)
// console.log(typeof num);
// console.log(num);

// let islog = 1;

// let s = "Affan SHaikh"
// let bool = Boolean(s);

// console.log(bool);

// ******************************************** Some Tricky Operations **********************************************

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); // 32

console.log(+true); //1

let count = 100
console.log(count++) //100
console.log(count) // 101

console.log(+true); //1


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true

console.log('1' === 1); // false (strict equality, check datatypes also)
console.log('1' == 1); // true (loose equality, convert datatypes)

// Primitive
//  Number, String, Boolean, null, undefined, Symbol, BigInt

// Non Primitive
//  Array, Objects, Functions

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object