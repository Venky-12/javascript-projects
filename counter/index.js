let curr_number = document.getElementById("number").innerHTML;
curr_number = Number(curr_number);
document.getElementById("decrease").onclick = function () {
  curr_number--;
  document.getElementById("number").innerHTML = curr_number;
};
document.getElementById("increase").onclick = function () {
  curr_number++;
  document.getElementById("number").innerHTML = curr_number;
};
document.getElementById("reset").onclick = function () {
  curr_number = 0;
  document.getElementById("number").innerHTML = curr_number;
};
