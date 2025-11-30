const OPEN_CARDS = [];
const boxes = document.querySelectorAll("div");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const startBtn = document.getElementById("start");



let isLocked = false;
let moves = 0;

function showAllCardsTemporarily() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.add("show");
    }

    setTimeout(() => {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("show");
        }
        isLocked = false; 
    }, 3000); 
}

startBtn.addEventListener("click", () => {
    moves = 0;
    h1.textContent = "Moves: 0";
    h2.textContent = "";
    showAllCardsTemporarily();
});


function handleClick() {
    if (isLocked) return;
    if (OPEN_CARDS.length === 1 && OPEN_CARDS[0] === this) {
        console.log("same card clicked");
        return;
    }


    OPEN_CARDS.push(this);

    this.classList.add("show");
    if (OPEN_CARDS.length === 2) {
        moves++;
        h1.textContent = "Moves: " + moves;
    }
    if (OPEN_CARDS.length === 2) {

        if (OPEN_CARDS[0].innerHTML === OPEN_CARDS[1].innerHTML) {
            OPEN_CARDS[0].classList.add("matched");
            OPEN_CARDS[1].classList.add("matched");
            OPEN_CARDS.length = 0;

            checkWin();
        } else {
            OPEN_CARDS[0].classList.add("unmatched");
            OPEN_CARDS[1].classList.add("unmatched");

            isLocked = true;

            setTimeout(function () {
                OPEN_CARDS[0].classList.remove("show");
                OPEN_CARDS[1].classList.remove("show");

                OPEN_CARDS[0].classList.remove("unmatched");
                OPEN_CARDS[1].classList.remove("unmatched");

                OPEN_CARDS.length = 0;

                isLocked = false;


            }, 2000)

        }
    }
}
function checkWin() {
    let allMatched = true;

    for (let i = 0; i < boxes.length; i++) {
        if (!boxes[i].classList.contains("matched")) {
            allMatched = false;
            break;
        }
    }

    if (allMatched) {
        h2.textContent = "congrats you are winner!!! 🎉" + moves + " moves!";
    }
}


for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick)
}