function add() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    document.getElementById("res").value = n1 + n2;
}

function sub() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    document.getElementById("res").value = n1 - n2;
}

function mult() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    document.getElementById("res").value = n1 * n2;
}

function divi() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    document.getElementById("res").value = n1 / n2;
}