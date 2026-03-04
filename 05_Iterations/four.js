const obj = {
    name : "Affan shaikh",
    dept : "CSE",
    class : "TYBTech",
    award : "3rd in URDU PROSE",
    year : "2025"
}

// objects are only iterated by for-in loop

for (const key in obj) {
    
    const element = obj[key];
    
console.log(`${key} ::: ${element}`);
    
}