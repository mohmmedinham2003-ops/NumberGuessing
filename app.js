let num = Math.random() * 10 + 1;
let randomNum = Math.floor(num);

console.log(randomNum);

let attempt = 0;
const maxAttempt = 3;


function clickonGuessActionbtn() {

    let guessNumber = document.getElementById("guessNumber");
    let textInput = Number(guessNumber.value);

    let heading = document.getElementById("heading");


    if (attempt < maxAttempt) {

        if (randomNum > textInput) {

            attempt++;

            heading.innerHTML =
            `Guessed number is less than the actual number.
            <br>Attempt Left: ${maxAttempt - attempt}`;

        } 
        
        else if (randomNum < textInput) {

            attempt++;

            heading.innerHTML =
            `Guessed number is higher than the actual number.
            <br>Attempt Left: ${maxAttempt - attempt}`;

        } else if(randomNum === textInput){
             heading.innerHTML =
            "Congratulations! You guessed the correct number";

            Swal.fire({
                title: "Good job!",
                text: "You won bro!",
                icon: "success"
            });

            return;

        }
        
        else {

            heading.innerHTML =
            "Congratulations! You guessed the correct number";

            Swal.fire({
                title: "Good job!",
                text: "You won bro!",
                icon: "success"
            });

            return;
        }


       
    }

}