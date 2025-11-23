const divs = document.querySelectorAll('div');
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

let count = 0;

function makeRandomColor() {

    if (this.clicked === true) {
        return;
    }

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = "rgb(" + r + "," + g + "," + b + ")";

    // color 
    this.style.backgroundColor = randomColor;
    this.style.opacity = ".5";
    this.style.transition = "all 0.5s ease-in-out";

    // h1 
    h1.innerHTML = "color code is : " + randomColor;
    h1.style.color = randomColor;
    h1.style.transition = "all 0.3s ease-in-out";


    // count colored box
    // اگر این باکس هنوز کلاس selected ندارد، کلاس selected را اضافه کن
    // و چون یک باکس جدید انتخاب شده، شمارنده را یک واحد افزایش بده
    // if (!this.classList.contains("selected")) {
    //     this.classList.add("selected");
    //     count++;
    // }
    if (this.clicked !== true) {
        this.clicked = true;
        count++;
    }

    // btn update
    btn.innerHTML = "box selecteds are : " + count;

    this.clicked = true;
}

for (let index = 0; index < divs.length; index++) {
    divs[index].addEventListener("click", makeRandomColor);
}