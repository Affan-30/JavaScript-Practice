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
