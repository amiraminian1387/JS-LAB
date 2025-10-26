let COUNT = 1;

function nextImage() {
  const img = document.querySelector("img");
  const counter = document.querySelector("p");

  COUNT++;
  if (COUNT > 4) COUNT = 1;

  img.setAttribute("src", "images/" + COUNT + ".png");
  counter.innerHTML = "image = " + COUNT;
}

function prevImage() {
  const img = document.querySelector("img");
  const counter = document.querySelector("p");

  COUNT--;
  if (COUNT < 1) COUNT = 4;

  img.setAttribute("src", "images/" + COUNT + ".png");
  counter.innerHTML = "image = " + COUNT;
}
