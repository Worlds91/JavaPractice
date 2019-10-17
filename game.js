var rouletteSpin = Math.floor(Math.random() * 37) + 1;
var RouletteBet = prompt("Bet on a number");
var RouletteGuess = Number(RouletteBet);
var AnswerOne = String("Yes");

if (RouletteGuess === rouletteSpin) {
	alert("You won!");
}

if (RouletteGuess != rouletteSpin) {
	alert("You did not win this time!");
}

var FollowUp = prompt("Would you like to bet again?");
if (FollowUp === AnswerOne) {
var rouletteSpin = Math.floor(Math.random() * 37) + 1;
var RouletteBet = prompt("Bet on a number");
var RouletteGuess = Number(RouletteBet);
var AnswerOne = String("Yes");
}

else if ( FollowUp != AnswerOne) {
	alert("Enjoy your stay at the Wendl Casino");
};
