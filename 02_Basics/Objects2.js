// const obj1 = new Object(); //singleton object

const obj1 = {} // non singleton object

obj1.id = 38
obj1.name = "Affan"
obj1.isLoggedIn = true


const common = {
    email : "some@mail.com",
    fullname : {
        firstname : "Affan",
        middlename : "Sarfaraz",
        lastname : "Shaikh"
    }
}


obj1.info = common
// console.log(common.fullname.lastname);
// console.log(obj1.info.fullname.middlename);

const o1 = {1:'a', 2:'b'}
const o2 = {3:'c', 4: 'd'}

// const o3 = Object.assign({}, o1, o2)

const o3 = {...o1, ...o2}

// console.log(o3);

// console.log(obj1);
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty("id2"));

const course = {
    name : "Natural Language Processing",
    duration : 4,
    fees : 25000
}

const {fees : rs} = course

console.log("the course fees is ",rs);
