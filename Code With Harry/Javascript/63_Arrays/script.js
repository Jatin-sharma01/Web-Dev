//Tutorial 63 code with harry, in this we will learn about arrays, chapter 4 of javascript notes, 2-02-2025
//arrays are mutable, agar array mae kisi index ka value change kia toh wo change ho jayega 

let a = [1,12,23,34,45,56]
// index 0 1  2  3  4  5
console.log(a);
console.log(a.length)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
a[0] = 1000;
console.log(a)
console.log(typeof a) // array is a type of object 
// console.log(a.toString()) //to convert an array into string
console.log(a)
console.log("this number will be popped out from an array:", a.pop()) // this will pop up the last digit form array
console.log("Result:", a)
console.log("this number will be pushed into an array: 10020, which will make the array length:", a.push(10020)) //this will add 1000 into an array
console.log("Result:", a)
console.log("this string will be pushed into an array: jatin, which will make the array length:", a.push("jatin")) //this will add jatin which is a string into an array
console.log("Result:", a)
console.log("this number will be shifted out from an array:", a.shift()) // this will shift the first digit form array, matlab 1 cheez nikal dega array ka, pop ka bhai hae ye
console.log("Result:", a)
console.log("this number will be unshifted into an array: 29, which will make the array length:", a.unshift(29)) // this will unshift the first digit form array, matlab 1 cheez add kr dega array ka, push ka bhai hae ye
console.log("Result:", a)
delete a[5] // this will delete the 5th element of an array, it will show the empty space bcz memory is already allocated and after deleting an element the array length wont change
console.log(a)



// we can also contact 3 arrays but it wont change the values of it permamnently
let b = [1,2,3]
let c = [4,5,6]
let d = [7,8,9]
console.log(b.concat(c,d))

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }

for (const value of a) {
    console.log(value)
}







// we can also map the arrays 
let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))




