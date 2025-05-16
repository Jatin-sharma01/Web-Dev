// tutorial 65 and 69 is solutions, 2-02-2025
// write a program  to calculate factorial of a number using reduce and for loops

//we are calculating factorial using reduce method
let a = 3
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=> a * b )
    return c
}
// here is the 2nd method to calculate factorial of a number using for loop
function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))
