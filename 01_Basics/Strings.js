const s = new String("Affan-Shaikh-Sarfaraz");
const clg = "Walchand Institute of Technology"

console.log(`My name is ${s} and i study in ${clg}`);


 console.log(s[1]);
 console.log(s.length);
 console.log(s.charAt(3));
 console.log(s.indexOf('f'));
 

 console.log( s.toUpperCase());
  console.log( s.toLowerCase());

 console.log(s);

 const sub = s.substring(0,4)
 console.log(sub); // Affa 4 not include
 
 const slice = s.slice(0, 2)
 console.log(slice); //Af not include 2
 
 const a = "   farhan   "
 console.log(a);
 console.log(a.trim()); //farhan remove all unwanted spaces
 
 const url = "https://affan.com/affan%20shaikh%20protfolio%202026"
 console.log(url.replaceAll('%20', '-')); //https://affan.com/affan-shaikh-protfolio-2026
console.log(url.includes("shaykh"));

console.log(s.split('-')); // based on char give it splits in substrings and return its array [ 'Affan', 'Shaikh', 'Sarfaraz' ]
