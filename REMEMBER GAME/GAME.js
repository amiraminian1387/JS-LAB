const OPEN_CARDS = [];
const boxes = document.querySelectorAll("div");


function handleClick() {
    OPEN_CARDS.push(this);
    console.log(OPEN_CARDS)
    this.classList.add("show")
    if (OPEN_CARDS.length === 2) {
        if (OPEN_CARDS[0].innerHTML === OPEN_CARDS[1].innerHTML) {
            OPEN_CARDS[0].classList.add("matched");
            OPEN_CARDS[1].classList.add("matched");
            OPEN_CARDS.length = 0;
        } else {
            OPEN_CARDS[0].classList.add("unmatched");
            OPEN_CARDS[1].classList.add("unmatched");

            setTimeout(function () {
                OPEN_CARDS[0].classList.remove("show");
                OPEN_CARDS[1].classList.remove("show");

                OPEN_CARDS[0].classList.remove("unmatched");
                OPEN_CARDS[1].classList.remove("unmatched");

                OPEN_CARDS.length = 0;


            }, 2000)

        }
    }
}
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick)
}