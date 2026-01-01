const header = document.querySelector("header");
const links = document.querySelectorAll("header a");
let lastScroll = 0;

function smoothScroll() {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        header.classList.add("removeheader"); //  بجای اینکه کلا نمایش داده نشه، فقط محو میشه
    }
    else {
        header.classList.remove("removeheader");
    }

    lastScroll = currentScroll;
    // خودم برای تمرین این 👇
    var color;
    if (window.scrollY >= 610) {
        color = "rgba(255, 0, 212, 1)";
    } else if (window.scrollY >= 100) {
        color = "purple";
    }
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = color;
    }
}

window.addEventListener("scroll", smoothScroll);

