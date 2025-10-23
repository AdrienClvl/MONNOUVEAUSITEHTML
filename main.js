console.log("Bienvenue sur Mon Nouveau Site HTML!");

let nav = document.querySelector("nav");
let button1 = document.querySelector(".section-1 > div > #div-1 > button");
let button2 = document.querySelector(".section-1 > div > #div-2 > button");

ChangeColor = () => {
  if (nav.style.backgroundColor === "transparent") {
    nav.style.backgroundColor = "deeppink";
    nav.style.transition = "background-color 0.2s ease-in-out";
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.transition = "background-color 0.2s ease-in-out";
  }
};

ChangeTitleSize = () => {
  let title = document.querySelector(".section-1 > h1");
  if (title.style.fontSize === "1rem") {
    title.style.fontSize = "2rem";
    title.style.transition = "font-size 0.2s ease-in-out";
  } else {
    title.style.fontSize = "1rem";
    title.style.transition = "font-size 0.2s ease-in-out";
  }
};

button1.addEventListener("click", ChangeColor);
button2.addEventListener("click", ChangeTitleSize);

BigElement = () => {};
