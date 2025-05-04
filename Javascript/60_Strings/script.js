// Tutorial 60, code with harry, 31-01-2025
// in this chapter we will learn about strings
//strings are immutable, matlab strings mae kitna bhi changes karo uska value same he rahega

let a = "jatin";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]); this wont work because there are only 5 characters in my name so it will show undefined



let real_name = "jatin";
let friend = "roshan";
console.log("his name is " + real_name + " and his friends name is " + friend);
// instead of writing this above whole line u can use template literals which is given below
console.log(`his name is ${real_name} and his friend name is ${friend}`)




// converting the string to uppercase 
let b = "jatin";
console.log(b.toUpperCase()) 
// converting the string to uppercase 2nd method
var string ="Jatin1";
string = string.toUpperCase();
console.log(string);
//checking the lenth of the string
console.log("length of the string is: ",b.length)




// this is an example of strings
let obj = {
    item: "pen",
    price: 100,
    quantity: 10,
};

console.log("the price of the",obj.item,"is",obj.price,"And the quantity is",obj.quantity);

//abb isi cheez ko likhne ka 2nd tarika hae template literal
 
let output = `the price of the ${obj.item} is ${obj.price} and the quantity is ${obj.quantity}`;
 console.log(output);

 /* isme kisi bhi string ko use krna usko direct likhdo
 and baaki keys ko use krna hae toh ${obj.key} iss tarike
 se likh sakte ho
 mostly yehi template literals wala tarika he use krte hae*/

//  strings

let z = "jatin";
console.log(z.toUpperCase())
console.log(z.toLowerCase())
console.log(z.length)
console.log(z.slice(1,5)) // 1 se shuru hoga slice karna and 5 se pehle khatam hoga, isme number 0 se shuru hote hae
console.log(z.slice(1)) //1 se pura slice kar dega
console.log(z.replace("ja","77")) // it will replace the letters ja with 77 in the variable z
console.log(z.concat(b,"sharma", "rahul")) // concat matlab join karna ya add karna, z variable mae ham b, sharma and rahul ko add kar rahe hae



//read notes page no. 19 for strings




