// video 75 of code with harry, watching on date 04-06-2025
// asynchronous actions are the actions that we initiate now but they finish late for ex. settimeout synchronous actions are the actions that initiate and finish one by one
// basically there are synchronous and asynchornous functions in the js like consolelog is synchronous functions so it will be printed first
// callback hell is the type of hell means callback inside callback inside ballback inside callback, so the code is like hell to understand
// to avoid callback hell or also called as promise of doom, we use promises, its the solution for callback hell
// promise is a "promise of code execution". the code either executes or fails, in both the cases the subscriber will be notified.

console.log("Harry is a hacker")
console.log("Rohan is a hecker")


setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")
// we got the result of above code first we got synchronous funcn then asynchronous
// below is an example of callback, its not callback hell, callback helll is basically callback inside callback
const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

// we were just trying to add a script src of prism into the head tag