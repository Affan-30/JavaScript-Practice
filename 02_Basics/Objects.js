// singleton -> single instance of object
// Object.create    (Constructor method of declaration)

// object literals
const s1 = Symbol("key1")

const jsobj = {
    name : "Affan",
    email : "affan@google.com",
    age : 20,
    key : s1,
    [s1] : "affan123",
    city : "Solapur",
    State : "Maharashtra",
    country : "India",
    isLoggedIn : false,
    lastLoginDetails : ["monday", "tuesday", "friday"]
}

// console.log(jsobj.name);
// console.log(jsobj["name"]);
// console.log(jsobj["key"]);
// console.log(typeof jsobj["key"]);
// console.log(jsobj);

// jsobj.email = "affan@microsoft.com"
// Object.freeze(jsobj) // freeze object to not modify 
// jsobj.email = "affan@chatgpt.com"
// console.log(jsobj);

jsobj.greetings = function () {
    console.log("Good afternoon JS User !");
}

// console.log(jsobj.greetings);
console.log(jsobj.greetings());

jsobj.greetings2 = function () {
    console.log(`Good afternoon JS ${this.name} !`);
}
console.log(jsobj.greetings2());

console.log(jsobj);
