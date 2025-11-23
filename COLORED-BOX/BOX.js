const divs = document.querySelectorAll('div');


function makeRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const randomColor = "rgb(" + r + "," + g + "," + b + ")";

  this.style.backgroundColor = randomColor;

}

for (let index = 0; index < divs.length; index++) {
  divs[index].addEventListener("click", makeRandomColor);
}