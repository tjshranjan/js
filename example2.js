let a = "This is an example of global variable in JS.";
function GE1 () {
    document.getElementById("demo").innerHTML = a;
}

function GE2(){
    a = "The same Global variable is changed inside this function."
    document.getElementById("demo1").innerHTML = a;
}

function GE3() {
    b = "This variable is used without declaring it."
    document.getElementById("demo2").innerHTML = b;
}

// program showing local scope of a variable
let c = "This is an example of ";

function LV1() {
    let d = "Local Variable"
    document.getElementById("demo3").innerHTML = c+d;
}