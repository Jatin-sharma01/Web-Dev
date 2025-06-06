// cwh 79 video, 06,06,2025
// we gonna talk about how to handle errors in js


// this is basically we are doing sum of 2 number by taking input from user but it will give us the false output
// a and b both are strings, so we if add 4 + 7 then answer is 47
// so we gonna use parseint to conver string to no. then add it


let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()
// try catch basically means we give the code to try and it will run, if it gives the error then the error will be handled by error