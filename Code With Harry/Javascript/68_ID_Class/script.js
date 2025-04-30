// tutorial no. 68, 26-03-2025
// Title: JavaScript - Selecting by Ids, Classes, and More
// this is very important video bcz it teaches getelementbyid and getelementbyclass

console.log("Lets Begin")
//suppose we want to change the color of 3rd box then we can do it by children method but there's simple way to do it
// first we will declare the variable and then we can use it by index value
let newcolor = document.getElementsByClassName("box")
console.log(newcolor)
newcolor[2].style.backgroundColor = "cyan";
// if u want to change the color of specific box u can give it id and change it
document.getElementById("limebox").style.backgroundColor = "lime";

//queryselector means adding inline css to the first element
document.querySelector(".box").style.backgroundColor = "green";
// to add css to all elements we must run a loop, we cant do it normally
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})