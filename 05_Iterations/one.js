const array = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element
    console.log("Element is : ", element);
    console.log("Sum till now is : ",sum);   
}

console.log("Even elemnts are : ");
let j = 0
let even = []
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    
    if(element % 2 == 0){
        console.log(element);
        even[j++] = element
    }
    console.log(even);
    
}
console.log("_______________________________________");

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == 5){
        console.log(element);
        
        console.log("Break applied");
        break;
        
    }
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element === 7){
        console.log("Skipped 7");
        
        continue;
    }
    console.log("elemnt is  : ",element);
    
}