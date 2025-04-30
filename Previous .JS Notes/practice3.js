// tutorial 3, Date: 11-05-2024
//practice question 1 for tutorial 3
/*prompt the user to enter their full name. generate a username
for them based on the input. Start user name with @, followed by
by their full name and ending with the fullname length.
*/


let fullName = prompt("Enter your fullname without spaces");

let userName = "@" + fullName + fullName.length;
console.log(userName);