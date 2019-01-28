console.log("jeraine");

/*const userScore = 0;*/
/*const computerScore = 0;*/
let userScore = 0; // const to let
let computerScore = 0; // const to let

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
/*const result_div = document.querySelector(".result");*/
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r','p','s'];
	/*console.log(Math.floor(Math.random() * 3));*/
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

/*console.log(getComputerChoice());*/
/*getComputerChoice();*/

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}


function win(user, computer){
	/*console.log("wins");*/
	/*console.log("wins");
	console.log(userScore);*/
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const user_Choice = document.getElementById(user);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	/*result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + " . You win!";*/
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!`;
	user_Choice.classList.add('green-glow');
	setTimeout(function(){ user_Choice.classList.remove('green-glow') }, 300);
}

/*setTimeout(function(){ alert("Hello"); }, 3000);*/

function lose(user, computer){
	/*console.log("lose");*/
	const comp_Choice = document.getElementById(user);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You Lost!`;
	comp_Choice.classList.add('red-glow');
	setTimeout(function(){ comp_Choice.classList.remove('red-glow') }, 300);
}

function draw(user, computer) {
	/*console.log("draw");*/
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const user_Choice = document.getElementById(user);
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} Equals ${convertToWord(computer)}${smallCompWord}. Its a Draw!`;
	user_Choice.classList.add('gray-glow');
	setTimeout(function(){ user_Choice.classList.remove('gray-glow') }, 300);
}

function game(userChoice) {
	/*console.log("hello"+ userChoice);*/
	const computerChoice = getComputerChoice();
	/*console.log("userChoice is " + userChoice);
	console.log("computerChoice is " + computerChoice);*/
	switch (userChoice + computerChoice) {
		case "rs": /*rock vs paper*/
		case "pr": /*rock vs scissors*/
		case "sp": /*scissors vs paper*/
			/*console.log("USER WINS");*/
			win(userChoice, computerChoice);
			break;
		case "rp": /*rock vs paper*/
		case "ps": /*paper vs scissors*/
		case "sr": /*scissors vs rock*/
			/*console.log("USER LOSES");*/
			lose(userChoice, computerChoice);
			break;
		case "rr": /*rock*/
		case "pp": /*paper*/
		case "ss": /*scissors*/
			/*console.log("ITS A DRAW");*/
			draw(userChoice, computerChoice);
			break;
	}

}

game("c");

function main() {
	rock_div.addEventListener('click', function() {
	/*console.log("rock");*/
		game("r");
	})

	paper_div.addEventListener('click', function() {
	/*console.log("paper");*/
		game("p");
	})

	scissors_div.addEventListener('click', function() {
	/*console.log("scissors");*/
		game("s");
	})
}

main();
