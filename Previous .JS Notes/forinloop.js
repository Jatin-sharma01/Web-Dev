// tutorial 3, Date: 11-05-2024
let student = {
    name: "jatin",
    age: 20,
    marks: 89,
    isPass: true,
};

for(let key in student){
    console.log("key =",key, "value =", student[key]);
}