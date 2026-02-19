// function sum(num1, num2){
//     console.log(num1 + num2);
// }

function sum(num1, num2){
    console.log(num1 + num2);
    return num1 + num2
}

const result = sum(65, 5)
console.log("Result is : ", result);

function greetings(username = "affan"){
    return `Good morning ${username}!`
}

// const greet = greetings()
console.log(greetings("Tohid murshad"));

//Functions where input no. is not fixed

function calculateCartPrice(...num){
return num;
}

console.log(calculateCartPrice(100,200,300,400));

const user = {
    username: "affan",
    price : 199
}

function handleObject(anyObj){
    console.log(`Current user is ${anyObj.username} and price is ${anyObj.price}.`);
    
}

handleObject(user);
handleObject({
    username: "sam",
    price : 399
})

const arr = [1,2,3,4,5]

function add1last (arr) {
    return arr[0] + arr[arr.length-1];
}

console.log(add1last(arr))
console.log(add1last([1,2,3,1]))