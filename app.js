let num = Math.random() * 10 + 1;
randomNum = Math.floor(num);
console.log(randomNum);

let attempt = 5;


function clickonGuessActionbtn() {
    let guessNumber = document.getElementById("guessNumber");



    for (let i = attempt; i >= 0; i--) {

        if (randomNum > guessNumber.value) {
            console.log("Guessed number is less than the actual Number you have");
        } else if (randomNum < guessNumber.value) {
            console.log("Guessed number is higher than the actual Number you have");

        } else if(randomNum == guessNumber.value) {
            console.log("Congratulations you have guessed the correct number");

        }else{
        console.log("Game over buddy");

        }

        console.log("attempts left" + attempt);

    }

}