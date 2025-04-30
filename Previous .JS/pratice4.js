// tutorial 4, Date: 12-05-2024
//pratice question-1
/* for a given array with marks of students ->[85,97,98,99]
find the average marks of students */

let marks = [85,97,98,99];
let sum = 0;
for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;

console.log(`avg marks of the class = ${avg}`);

//pratice question-2
/*for a given array with prices of 5 items->[250,400,535,533,34]
all items have an offer of 10% off on them. change the array to store
final price after applying the offer
*/
//solving with for of loop

let items = [250,400,535,533,34];
let i = 0;
for (let val of items) {
    let offer = val/10;
    items[i] = items[i]-offer;
    console.log(`value after offer: ${items[i]}`);
    i++;
}

//solving with for loop
let prices = [250,400,535,533,34];
for (let i = 0; i < prices.length; i++) {
    let offer = prices[i]/10;
    prices[i] = prices[i]-offer;
}
console.log(prices);
    
