const accID = 12345; //Can not be changed
let accName = "John Doe"; // maintain block scope
var accEmail = "john.doe@example.com"; // does not maintain block scope so prefer not to use
accCity = "New York"; // without using let,var,canst the variable creation in jS is possible (Not Recommended)
let accState;
console.log(accID);

console.table([accID, accName, accEmail, accCity, accState])
