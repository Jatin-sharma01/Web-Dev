// Date 28-01-2025, Code with harry tutorial no. 55
var a = 5;
var b = 6;
var c = "jatin";

console.log( a + b + 9)
console.log( typeof a, typeof b, typeof c)

let x = "jatin"; // its a string
let y = 22; // number
let z = 2.3; //number
let t = true; //boolean
let s = undefined; //undefined
let q = null; //object, null is a type of object, dont forget it

console.log( x, y, z, t, s, q)
console.log( typeof x, typeof y, typeof z, typeof t, typeof s, typeof q)

let o = {
    name: "jatin",
    "job role": "Developer", // as there is space between job role so u have to write it in double quotes
    "is experienced": true,
    "Previous salary": 20000,
}
console.log(o)
o.graduation = "Btech Computer Science";
console.log(o)
o.college_name = "Maharshi Dayanand University";
console.log(o)

// rules for choosing variables names
// 1. letters, digits, underscore and dollar sign are allowed
// 2. must begin with a dollar sign, _ or a letter
// 3. javascript reserved words cant be used as variables
// 4. Jatin and jatin are different variable ( basically javascript variables are case sensitive)

//  var vs let in Js
// 1. var is globally scoped while let and const are blocked scoped
// 2. var can be updated and redeclared within scope
// 3. let can be updated but not reclared
// 4. const are neither be updated nor be redeclared.