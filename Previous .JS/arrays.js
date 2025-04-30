// tutorial 4, Date: 12-05-2024

//ham object ki jagah array use kar rahe hae
let marks = [97, 98, 99]; 
console.log(marks);
console.log(marks.length);

//array with the help of string
let names = ["ab","ac","ad","ae","af"];
console.log(names);

//used to print a specific array
console.log(marks[0]);

//printing all names with the help of for loop
for(let idx = 0; idx < names.length; idx++){
    console.log(names[idx]);
}

//printing all names with the help of for of
for(let hero of names){
    console.log(hero);
}

//printing all cities with uppercase letters

let cities = ["delhi","mumbai","pune","gurgaon"];
for(let city of cities){
    console.log(city.toUpperCase());
}
