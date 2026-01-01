// Array of English sentences
const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing fast improves your productivity.",
    "Practice makes perfect in every skill.",
    "JavaScript is a versatile programming language.",
    "Learning new things keeps your mind sharp.",
    "Consistency is the key to success.",
    "Stay focused and keep typing.",
    "Errors are proof that you are trying.",
    "Challenge yourself every day.",
    "Never give up on your goals."
];
const btn = document.querySelector("button")
const input = document.querySelector("input")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")
let startTime = 0;
let timerInterval;
const timerSpan = document.querySelector("#timer")

input.disabled = true; 


function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    h2.innerHTML = sentences[randomIndex];
    input.value = "";
    h3.innerHTML = ""; 
    input.disabled = false; 
    input.focus(); 
    startTime = Date.now();
    timerSpan.innerHTML = "0";
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const seconds = Math.floor((Date.now() - startTime) / 1000);
        timerSpan.innerHTML = seconds;
    }, 100);
}

function handleAqurracy() {
    if (input.value === "") {
        h3.innerHTML = "";
        return;
    }
    if (input.value === h2.innerHTML) {
        clearInterval(timerInterval);
        const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
        let result = "You did it! ";
        if (totalSeconds <= 10) {
            result += "Great!";
        } else if (totalSeconds <= 20) {
            result += "Good!";
        } else {
            result += "Try harder!";
        }
        h3.innerHTML = result + " Time: " + totalSeconds + " seconds.";
        input.disabled = true;
    } else {
        h3.innerHTML = "Wrong";
    }
}
btn.addEventListener("click", getRandomSentence);
input.addEventListener("keyup", handleAqurracy);


