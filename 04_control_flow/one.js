// if 
num  = 2
if(num < 1){
    console.log("good");
}

if(2 === "2"){
    console.log("wrong");
}

// if - else
const temp = 46
    if(temp <50){
        console.log("less than 50");
        
    }else{
        console.log("greater than 50");
    }

const login = false;
const deitCard = false;

if(login && deitCard){
    console.log("User has debit card");
}else if( login && !deitCard ){
    console.log("User does not has debit card");
}else{
    console.log("Unauthorized user");
}

// Falsey Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// "0", "false", " ", [], {}, function(){}

const obj = {
    name : "affan"
}

if(Object.keys(obj).length === 0){
    console.log("Object is empty");
    
}


// Nullish Coaleshing Operator (??)

let val ;
val = 5 ?? 10
console.log(val);
let val2 = null ?? 10
console.log(val2);
let val3 = undefined ?? 15
console.log(val3);

let num2; 
num2 = undefined ?? null
console.log(num2);

// Ternary Operator
// condition ? true : false

let a = 10

a > 0 ? console.log("Greater") : console.log("Smaller");

// Switch case
let key = 22
switch (key) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;

    default:
        console.log("Default");
        
        break;
}
