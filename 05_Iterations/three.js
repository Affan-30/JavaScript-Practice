
const array = [1,2,3,4,5]
//      (variable) (item to iterate)
for (const num of array) {
    // console.log(num);
    
}

const line = "hello world!"
for (const num of line) {
    // console.log(num);
    
}

const  map = new Map()

map.set("UAE","United Arab Emirates")
map.set("SAR","Kingdom of Saudi Arabia")
map.set("IN","Republic of India")

// console.log(map);

for (const key of map) {
    // console.log(key); // array of key - value pair
}

for (const [key, value] of map) {
    console.log(key, " : ", value);
}
