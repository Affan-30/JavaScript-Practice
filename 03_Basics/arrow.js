

const user = {
    name  :"Affan",
    city : "Solapur",
    pin: 413002,

    greet : function() {
        console.log(`${this.name}, welcome to our website`);
        console.log(this);
        
    }
}

// user.greet()

// user.name = "Farhan";

// user.greet()

// function chai(){
//     console.log(this); -> {data}
// }

// const chai  = () => {
//     console.log(this); -> {}
// }

// chai();

//======================================================================================

// const addtwo = (n1, n2) => {
//     return n1 + n2;
// }

// const addtwo = (n1, n2) => n1+n2

const addtwo = (n1, n2) => (n1+n2)



console.log(addtwo(3,5));
