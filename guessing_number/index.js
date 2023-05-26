let current_score = Number(document.getElementById("score").innerText);

console.log(current_score);
document.getElementById("myButton").onclick = function () {
  let myGuess = document.getElementById("myTextField").value;
  let computerGuess = Math.floor(Math.random() * 10 + 1);
  document.getElementById(
    "result"
  ).innerHTML = `You picked ${myGuess} and opponent picked ${computerGuess}`;
  if (myGuess == computerGuess) {
    current_score++;
  } else {
    current_score--;
  }
  document.getElementById("score").innerHTML = current_score;
};
document.getElementById("reset").onclick = function () {
  current_score = 0;
  document.getElementById("score").innerHTML = current_score;
};




