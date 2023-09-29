import loadPage from "./load";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "../dist/css/styles.css";

const clickListening = () => {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");

  homeBtn.addEventListener("click", home);
  menuBtn.addEventListener("click", menu);
  contactBtn.addEventListener("click", contact);
};

loadPage();
clickListening();
