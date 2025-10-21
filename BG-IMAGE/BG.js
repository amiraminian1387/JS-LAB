
// ---(versian 1)---  ---usage of boolean az my teacher used---

// let flag = true;

// function changeBackground() {
//     if (flag === true) {
//         document.body.style.backgroundImage = "url('janati.jpg')";
//         flag = false;
//     } else  {
//         document.body.style.backgroundImage = "url('kazem.jpg')";
//         flag = true;
//     }
// }

// ---(versian 2)---  ---usage of number = 0,1,2,3,0---
let flag = 0;

function changeBackground() {
    if (flag === 0) {
        document.body.style.backgroundImage = "url('janati.jpg')";
        flag = 1;
    } else if (flag === 1) {
        document.body.style.backgroundImage = "url('kazem.jpg')";
        flag = 2;
    } else if (flag === 2) {
        document.body.style.backgroundImage = "url('mohsen.jpg')";
        flag = 3;
    } else {
        document.body.style.backgroundImage = "url('shamkhani.jpg')";
        flag = 0;
    }
}



