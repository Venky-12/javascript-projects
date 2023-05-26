let a;
let b;
let c;
document.getElementById("myButton2").onclick = function () {
  a = document.getElementById("a").value;
  b = document.getElementById("b").value;
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("myLabel3").innerHTML =
    "The result is " + Math.floor(c);
};
