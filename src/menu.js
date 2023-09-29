function createMenu(item, price, foodClass) {
  const card = document.createElement("div");
  card.classList.add("card", foodClass);

  const food = document.createElement("h5");
  food.textContent = item;

  const cost = document.createElement("h6");
  cost.textContent = price;

  card.appendChild(food);
  card.appendChild(cost);

  return card;
}

const section = () => {
  const menuSect = document.createElement("section");
  menuSect.classList.add("menu-section");

  const appetizers = document.createElement("div");
  const appetizer = document.createElement("h3");
  appetizer.textContent = "Appetizers";
  appetizers.classList.add("title");
  appetizers.appendChild(appetizer);

  const entrees = document.createElement("div");
  const entree = document.createElement("h3");
  entree.textContent = "Entrees";
  entrees.classList.add("title");
  entrees.appendChild(entree);

  const desserts = document.createElement("div");
  const dessert = document.createElement("h3");
  dessert.textContent = "Desserts";
  desserts.classList.add("title");
  desserts.appendChild(dessert);

  const cardsOne = document.createElement("div");
  cardsOne.classList.add("card-container");
  cardsOne.appendChild(createMenu("Fish Roulade", "with mole blanco", "fish"));
  cardsOne.appendChild(
    createMenu("Caesar Salad", "with dehydrated parm", "caesar")
  );
  cardsOne.appendChild(createMenu("Pozole", "with fried fish skin", "pozole"));

  const cardsTwo = document.createElement("div");
  cardsTwo.classList.add("card-container");

  cardsTwo.appendChild(createMenu("Wagyu", "with short-rib pouch", "wagyu"));
  cardsTwo.appendChild(
    createMenu("Lobster Tart", "with sugar glass", "lobster")
  );
  cardsTwo.appendChild(
    createMenu("Pheasant", "with squash blossom quesadilla", "pheasant")
  );

  const cardsThree = document.createElement("div");
  cardsThree.classList.add("card-container");
  cardsThree.appendChild(
    createMenu("Chocolate Cake", "with hazelnut mousse", "filet-mignon")
  );
  cardsThree.appendChild(
    createMenu("Hibiscus Tart", "with passionfruit glaze", "hibiscus")
  );

  menuSect.appendChild(appetizers);
  menuSect.appendChild(cardsOne);
  menuSect.appendChild(entrees);
  menuSect.appendChild(cardsTwo);
  menuSect.appendChild(desserts);
  menuSect.appendChild(cardsThree);

  return menuSect;
};

const menuActive = () => {
  const btns = Array.from(document.querySelectorAll(".btn"));
  btns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
  const menuBtn = document.getElementById("menu");
  menuBtn.classList.add("active");
};

const menu = () => {
  menuActive();
  let sectionAppend = section();
  let sectionRemove = document.querySelector("section");

  const content = document.getElementById("content");
  content.removeChild(sectionRemove);
  content.appendChild(sectionAppend);
};

export default menu;
