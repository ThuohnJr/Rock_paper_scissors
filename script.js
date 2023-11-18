function game(){
		let choiceArray = ["Paper","Rock","Scissors"];
	let display = choiceArray[Math.floor(Math.random()*choiceArray.length)].toLowerCase();
let userInput = prompt("What's your choice?").toLowerCase();

	function getCompChoice(){

	return display;
}
function getPlayerChoice(){

	return userInput;
}

	if (userInput == "paper" && display == "rock"){
		console.log("You win! Paper beats rock");

			}
else if (userInput == "rock" && display == "paper"){
		console.log("You lose! Paper beats rock");
	}
	if (userInput == "paper" && display == "scissors"){
		console.log("You lose! Scissors beats paper");
	}
else if (userInput == "scissor" && display == "paper") {
		console.log("You win! Scissors beats paper");
	}
	if (userInput == "rock" && display == "scissor"){
		console.log("You win! Rock beats scissor");
	}
else if (userInput == "scissor" && display == "rock"){
		console.log("You lose! Rock beats scissor");
	}

	}
game();
document.getElementByClassName('rock').

function playRound(){
	document.getElementByClassName('rock').onClick()
	console.log(e);
}
