
const arr = ["affan","farhan","tohid","izhan","hamza","aazan"]

arr.forEach( (item) => {
    console.log(item);
} )

arr.forEach( (item, index, arr) => {
    console.log(item , index);
} )

const obj = [
    {
    name : "Affan shaikh",
    dept : "CSE",
    class : "TYBTech",
    award : "3rd in URDU PROSE",
    year : "2025"
}
,{
    name : "Farhan shaikh",
    dept : "CSE",
    class : "TYBTech",
    award : "3rd in URDU PROSE",
    year : "2025"
}
,{
    name : "Izhan shaikh",
    dept : "CSE",
    class : "TYBTech",
    award : "3rd in URDU PROSE",
    year : "2025"
}

]

obj.forEach( (item) => {
    console.log(item.name);
    
})