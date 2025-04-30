// Tutorial 58, 31-01-2025, this video is about functions in js,
// part 1, using function to fill large number of names 
function nice(name) {
    console.log("Hey " + name + " You are good")
    console.log("Hey " + name + " You are perfect")
    console.log("Hey " + name + " Your tshirt is good")
    console.log("Hey " + name + " Your laptop is trash")
}
nice("jatin")
// part 2, sum using 2 values
function add(a, b) {
    console.log( a + b )  
}
add( 5 , 6 )

// part 3, sum using 2 values with return value, return is used to capture the output
function sum(x, y) {
    return x + y
}
result = sum( 3,5)
result1 = sum( 5,5)
result2 = sum( 6,5)
console.log("the sum of these 2 numbers is:", result)
console.log("the sum of these 2 numbers is:", result1)
console.log("the sum of these 2 numbers is:", result2)

// part 4, arrow function, from this a function can be saved into a variable

const func1 = (x) =>{
    console.log("I am an arrow function", x);
}
func1(34);
func1(45);
func1(56);

