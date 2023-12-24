// ***** CONVERSIONS *****
let score = "33aa"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "abc32" => NaN
// true => 1 , false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// "" => false , "akil" => true
// 1 => true , 0 => false

let someNumber = 35
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber) // string

// ***** OPERATIONS *****