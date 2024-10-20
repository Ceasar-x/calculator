let num = document.getElementById("inputnumber");
function pressOpen() {
    num.value  += "(";
}
function pressClose() {
    num.value  += ")";
}
function back() {
    num.value  = num.value.toString().slice(0 , -1)
}
function slash() {
    num.value  += "/";
}
function seventh() {
    num.value  += "7";
}
function eighteen() {
    num.value  += "8";
}
function nineth() {
    num.value  += "9";
}
function multiplication() {
    num.value  += "*";
}
function fourth() {
    num.value  += "4";
}
function fifth() {
    num.value  += "5";
}
function sixth() {
    num.value  += "6";
}
function sub() {
    num.value  += "-";
}
function first() {
    num.value  += "1";
}
function second() {
    num.value  += "2";
}
function third() {
    num.value  += "3";
}
function addition() {
    num.value  += "+";
}
function pressClear() {
    num.value  = "";
}
function zeroo() {
    num.value  += "0";
}
function dot() {
    num.value  += ".";
}
function equalizar() {
    num.value  = eval(num.value) ;
}