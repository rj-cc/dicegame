diceNumberGenerator();

//dice game logic
function diceNumberGenerator() {
  var diceNumber1 = Math.random();
  var diceNumber2 = Math.random();

  diceNumber1 = Math.floor(diceNumber1 * 6 + 1);
  console.log("dice 1 value is", diceNumber1);
  document.querySelector("#dice1").style.backgroundImage =
    "url('images/dice" + diceNumber1 + ".png')";

  diceNumber2 = Math.floor(diceNumber2 * 6 + 1);
  console.log("dice 2 value is", diceNumber2);
  document.querySelector("#dice2").style.backgroundImage =
    "url('images/dice" + diceNumber2 + ".png')";

  if (diceNumber1 > diceNumber2) {
    console.log("Player 1 won!");
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (diceNumber2 > diceNumber1) {
    console.log("Player 2 won!");
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  } else if (diceNumber1 === diceNumber2) {
    console.log("Deuce!");
    document.querySelector("h1").innerHTML = "It's a tie!";
  }
}
