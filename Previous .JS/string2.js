// tutorial 3, Date: 11-05-2024
//strings interpolation and templates literals

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