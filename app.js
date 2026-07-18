let num = Math.random() * 10 + 1;
randomNum = Math.floor(num);
console.log(randomNum);

let attempt = 0;
const maxAttemp = 3;
function clickonGuessActionbtn() {
    let guessNumber = document.getElementById("guessNumber");

    let textInput = guessNumber.value;
    heading = document.getElementById("heading");
    if (attempt < maxAttemp) {
        attempt++;
        if (randomNum > textInput) {
            heading.innerHTML = `Guessed number is less than the actual Number you have. remaining attemt ${maxAttemp - attempt}  `;

        } else if (randomNum < textInput) {
            heading.innerHTML = `Guessed number is higher than the actual Number you have. remaining attemt ${maxAttemp - attempt}  `;

        } else {
            heading.innerHTML = "Congratulations you have guessed the correct number";
            Swal.fire({
                title: "Good job!",
                text: "You won bro!",
                icon: "success"
            });

        }
    } else {
        heading.innerHTML = "Game over buddy";
        Swal.fire({
            icon: "error",
            title: "Oops... attemps are over",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });

    }


}