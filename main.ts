//Lowercase
let personName = "Wasay Sheikh";
console.log("lowercase",personName .toLowerCase());

//uppercase
console.log("upper case" , personName .toLocaleUpperCase());

//title case
console.log("title case", personName .replace(/\bw/g,c=> c.toUpperCase()));