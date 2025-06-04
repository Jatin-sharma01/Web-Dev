// video 74 of cwh, 04-06-2025

let button = document.getElementById("btn")
// these are browser events, we are going to use browser events for mouse, there are many types of mouse events like click, double click, scroll and etc
// here is the link below for mdn https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events here u can study remaining mouse events
button.addEventListener("click", ()=>{
    // alert("Yay i was clicked");
    document.querySelector(".box").innerHTML = "<b>yayy you were made bold</b> Enjoyyyyy"
})
button.addEventListener("contextmenu", ()=>{
    alert("Dont right click it pls")
})
// keydown fires when a keyboard key is pressed
// e stands for event object in the below line, when u try to do console log, u can see whatever event took place it will be printed in the console
// e.key will give us the keycode for that key for example: arrowup 38, we can use these codes in making games for example character will jump whenever u press the uparrow key
document.addEventListener("keydown", (e)=>{
    console.log(e.key)
})
