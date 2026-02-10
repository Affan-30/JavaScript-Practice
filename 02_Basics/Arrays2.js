const flowers = ["rose", "jasmine", "tulip"]

const sweets = ["kajukatli", "barfi", "gulabjamun"]

// flowers.push(sweets)

// console.log(flowers);

// usually not prefered
// const newarr = flowers.concat(sweets) 
// console.log(newarr);

//Prefered for merging arrays
// const all = [...flowers, ...sweets]
// console.log(all);

// const nums = [1,2,3, [4,5,6], 7, [8,9,[10]]]
// console.log(nums);

// const flat = nums.flat(7)
// console.log(flat);;

console.log(Array.isArray("Affan"));

console.log(Array.from("Affan"));

console.log(Array.from({name : "Affan"})); //Interesting

let s1=100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));
