import _ from "lodash";
import "./styles.css";

function homeHeader() {
  const element = document.createElement("header");
  const chefImage = document.createElement("img");
  chefImage.src = "images/chefImg.png";
  chefImage.alt = "Chef";

  // Lodash, now imported by this script
  element.innerHTML = "Jordan's restaurant";

  element.classList.add("globalNav");
  element.appendChild(chefImage);
  chefImage.classList.add("chefImg");

  return element;
}

function headerNav() {
  const element = document.createElement("nav");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");

  btn1.innerHTML = "Home";
  btn1.classList.add("homeBtn");

  btn2.innerHTML = "Menu";
  btn2.classList.add("menuBtn");

  btn3.innerHTML = "Contact";
  btn3.classList.add("contactBtn");

  element.appendChild(btn1);
  element.appendChild(btn2);
  element.appendChild(btn3);

  return element;
}

function makeButton() {}

function homeBody() {
  const element = document.createElement("section");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Dishes I've made as a chef"], " ");
  element.classList.add("globalBody");

  return element;
}
function homeFooter() {
  const element = document.createElement("footer");

  // Lodash, now imported by this script
  element.innerHTML = "Footer";
  element.classList.add("globalFooter");

  return element;
}

document.body.appendChild(homeHeader());
document.body.appendChild(headerNav());
document.body.appendChild(homeBody());
document.body.appendChild(homeFooter());

export default loadHome;
