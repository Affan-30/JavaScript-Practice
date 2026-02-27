//------------------------------- Hoisting ---------------------------------------------------

console.log("No error = ",addone(5)) //can call before declaration

function addone(num){
    return num + 1;
}

//======================  

console.log("error for this type of declaration of function ", add2(7)); // can not call before declaration
const add2 = function addTwo(num){
    return num +2;
}