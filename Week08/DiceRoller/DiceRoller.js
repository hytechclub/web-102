function rollD6() {
	// random decimal number between 0 and 1
	var randomDecimal = Math.random();

	// random decimal number between 0 and 6
	var randomDecimalRange = randomDecimal * 6;

	// random whole number between 1 and 6
	var randomDiceRoll = Math.ceil(randomDecimalRange);

	alert("You rolled a " + randomDiceRoll + "!");
}