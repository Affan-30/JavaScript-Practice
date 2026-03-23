const promiseOne = new Promise(function (resolve, reject) {
    // Do any task : DB calls, network etc
    setTimeout(() => {
        console.log("Async Function called");
        resolve()
    }, 3000);
})

promiseOne.then(function () {
    console.log("Promise resolved !");
    
})

new Promise(function (resolve, reject) {
    // Do any task : DB calls, network etc
    setTimeout(() => {
        console.log("Async Function 2 called");
        resolve()
    }, 3000);
}).then(function(){
    console.log("2nd promise resolved");
    
})

const promiseThree = new Promise(function (resolve, reject) {
    // Do any task : DB calls, network etc
    setTimeout(() => {
        console.log("Async Function 3 called");
        resolve({username : "Affan", email : "affan@example.com"})
    }, 3000);
})

promiseThree.then(function (user){
    console.log(user);
    
})

const promiseFour = new Promise(function (resolve, reject) {
    // Do any task : DB calls, network etc
    setTimeout(() => {
        console.log("Async Function 4 called");
        let error = true
        if(!error){
             resolve({username : "Affan", email : "affan@example.com"})
        }else{
            reject('ERROR : Something went wrong!')
        }
       
    }, 3000);
})

promiseFour.then(function (user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log("This is username  :",username);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("Promise four is completed !4!");
    
})
console.log('##################3333333333333333333333333');

const promiseFive = new Promise(function (resolve, reject) {
    // Do any task : DB calls, network etc
    setTimeout(() => {
        console.log("Async Function 5 called");
        let error = false
        if(!error){
             resolve({username : "JavaScript", email : "affan@example.com"})
        }else{
            reject('ERROR : JS went wrong!')
        }
       
    }, 3000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers() {
    try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E : ",error);   
    }
}

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data)=> {
    console.log(data);
    
})
.catch((err) => {
    console.log("ERROR : ",err);
    
})