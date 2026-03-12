// JavaScript 
//     |
//     | -> Synchronous (A synchronous language is a programming paradigm where code is executed sequentially, line-by-line, in a specific order)
//     |
//     | _> Single Threaded (A single-threaded language is a programming language that executes tasks sequentially, one at a time, using a single thread of execution. While this means it cannot perform multiple tasks simultaneously)
// 
//  Execution Context 
//     |
//     | -> Each task waits until its previous task is completed
// 
//  Blocking Code : Block the flow of program              (Synchronous)
//  Non-Blocking code : Does not block the flow of program (Asynchronous)
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

console.log("1");
setTimeout(() => {
    console.log("2");
    
}, 0);
console.log("3");


