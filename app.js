// GAME Function
// * Player must guess a number between min and max
//Player gets a certain number of guesses
//Notify player of number of guesses remaining
//Notify the player of the correct answer if loose
//Let player choose to play again

//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI Elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
})
//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //Validate 
    if(isNaN(guess) || guess< min || guess>max){
        setMessage(`please enter a number between ${min} and ${max}`, 'red');
    }
    //Check if won
if(guess===winningNum){
    //game over won
    
    gameOver(true, `${winningNum} is correct, YOU WIN`);
}else{
    //wrong number
    guessesLeft -=1;
    if(guessesLeft === 0){
        //game over lost

    gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
    } else{
        //Game continues answer wrong

        //Change border color
        guessInput.style.borderColor ='red';
        //Tell user its a wrong number
        setMessage(`${guess} is not the correct, ${guessesLeft} guesses left`,'red');
        //clear input
        guessInput.value = '';
    }
}

});
//Game over
function gameOver(won, msg){

    let color;

    won===true ? color ='green' : color ='red';
    //Disable input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    //set message
    setMessage(msg);

    //Game over
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
//Get winning num
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;

}