// Tutorial 57 of Code with harry, Date: 31-01-2024 
// We will learn about loops
// This is a basic loop which consist of 3 statement separated with semi columns, loop wont stop until and unless all 3 statements are true
console.log("Below is the Output of Normal Loop:")
let a = 1
for (let i = 0; i < 10; i++){
    console.log(a + i);
}

// For In Loop, its used to print object and their keys
console.log("Below is the Output of For IN Loop:")
let obj = {
    "name:": "jatin",
    "Job Role:": "Programmer",
    "Educated from:": "Mdu University",
}
for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
}
console.log("Below is the Output of For of Normal Loop:")
// For Of Loop, its used for arrays, we will study this later in future videos

for (const name of "jatin") {
    console.log(name)
}

// while loop
console.log("Below is the Output of while Loop:")
let c = 0;
while (c < 6) {
    console.log(c)
    c++;
}

// do while loop, its not used most commonly, its used very less, if u wana run the code atleast once, then its perfect
console.log("Below is the Output of Do while Loop:")
let d = 0;
do {
    console.log(d)
    d++;
} while (d < 4);