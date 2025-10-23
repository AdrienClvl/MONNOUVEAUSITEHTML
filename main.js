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

// Exercice 1 - Filtre de stock

const products1 = [
  { sku: "A100", name: "Clavier", price: 29.99, stock: 12 },
  { sku: "B200", name: "Souris", price: 19.99, stock: 0 },
  { sku: "C300", name: "Écran", price: 159.99, stock: 5 },
];

function InStock() {
  const inStockProducts = products1.filter((product) => product.stock > 0);
  inStockProducts.forEach((product) => {
    console.log(
      `Le produit "${product.name}" est en stock avec ${product.stock} unités disponibles.`
    );
  });
}
InStock(); // Appel de la fonction pour tester
