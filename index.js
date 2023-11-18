function game(){
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;
};

function playGame(){
const rockBtn =	document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('scissor');
const playerOptions = [rockBtn, paperBtn, scissorBtn];
const compOptions = ['rock', 'paper', 'scissor'];
}

playerOptions.forEach((option, i) => {
	option.addEventListener('click',function(){

		const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;


                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

								 winner(this.innerText,computerChoice)

								 if(moves == 10){
								                     gameOver(playerOptions,movesLeft);
								                 } 
	}
});

if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }


function gameOver(){

}
