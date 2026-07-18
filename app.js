let num = Math.random() * 10 + 1;
randomNum = Math.floor(num);
console.log(randomNum);


function clickonGuessActionbtn() {
    let guessNumber = document.getElementById("guessNumber");

    let attempt = 5;

    if (attempt == 0) {

        console.log("Game over buddy");

    }

    if (randomNum > guessNumber.value) {
        console.log("Guessed number is less than the actual Number you have");
    } else if (randomNum < guessNumber.value) {
        console.log("Guessed number is higher than the actual Number you have");

    } else {
        console.log("Congratulations you have guessed the correct number");

    }

    attempt--;


}