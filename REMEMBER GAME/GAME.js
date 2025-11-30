const boxes = document.querySelectorAll("div");


function handleClick() {
    this.classList.add("show")

}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick)
}