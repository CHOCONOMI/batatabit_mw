var btr = document.getElementById("btn-r");
var bts = document.getElementById("btn-s");
var btm = document.getElementById("btn-m");
var btd = document.getElementById("btn-d");
var btnr = document.getElementById("btn-rr");


function multiplica() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var num3 = document.getElementById("result");
    
    num3.textContent=(num1*num2)
}

function division() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var num3 = document.getElementById("result");

    num3.textContent=(num1 / num2)
}

function suma() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var num3 = document.getElementById("result");
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    num3.textContent=(num1 + num2)
}

function resta() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var num3 = document.getElementById("result");
    
    num3.textContent=(num1 - num2)
    console.log("a")
}

function reset() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var num3 = document.getElementById("result");
    
    num3.textContent=('0')
}

btm.addEventListener('click', multiplica);
btd.addEventListener('click', division);
bts.addEventListener('click', suma);
btr.addEventListener('click', resta);
btnr.addEventListener('click', reset);