// javascript tutorial no. 59 and 61, 1-02-2025
/* Create a faulty calculator using javascript

this faulty calculator does following:
1. it takes two number as input from user
2. it performs wrongs operations as follows
+ ----> -
* ----> +
- ----> /
/ ----> **

it performs wrong operations 10% of the time
*/

let random = Math.random()
let a = prompt("Enter your first number")
let c = prompt("Enter your operation")
let b = prompt("Enter your second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    
} else {
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
