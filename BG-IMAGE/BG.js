
// ---(versian 1)---  ---usage of boolean az my teacher used---

let flag = true;

function changeBackground() {
    if (flag === true) {
        document.body.style.backgroundImage = "url('janati.jpg')";
        flag = false;
    } else  {
        document.body.style.backgroundImage = "url('kazem.jpg')";
        flag = true;
    }
}



