var a = "DANIEL";
var b =  12345;
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function imgError() {
    alert('An image could not be loaded.');
}

// WEJAPA
function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Hello " + fname + "! You will now be redirected to your Dashboard");
}
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();