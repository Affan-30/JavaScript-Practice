// Immediately Invoked Function Expressions IIFE

//Named IIFE
(function DB(){
    console.log("DB Connected");    
})();                  // Semicolon is imp here to stop the function

//Simple/unamed IIFE
( (name) => {
    console.log("DB CONNECTED 2 BY ",name);
    
} )("Affan")