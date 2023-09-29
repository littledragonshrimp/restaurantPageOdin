const header = () => {
  const head = document.createElement("header");
  const restaurant = document.createElement("div");
  restaurant.classList.add("title");

  const title = document.createElement("h1");
  let restaurantName = "Jordan's Dishes";
  title.textContent = restaurantName;
  const subTitle = document.createElement("h6");
  let subText = "Foods I've made as a chef";
  subTitle.textContent = subText;

  restaurant.appendChild(title);
  restaurant.appendChild(subTitle);
  head.appendChild(restaurant);

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");
  const tabList = document.createElement("ul");
  const homeTab = document.createElement("li");
  homeTab.classList.add("btn");
  homeTab.classList.add("active");
  homeTab.setAttribute("id", "home");
  homeTab.textContent = "Home";
  const menuTab = document.createElement("li");
  menuTab.classList.add("btn");
  menuTab.setAttribute("id", "menu");
  menuTab.textContent = "Menu";
  const contactTab = document.createElement("li");
  contactTab.classList.add("btn");
  contactTab.setAttribute("id", "contact");
  contactTab.textContent = "Contact";

  tabList.appendChild(homeTab);
  tabList.appendChild(menuTab);
  tabList.appendChild(contactTab);

  tabs.appendChild(tabList);
  head.appendChild(tabs);

  return head;
};

const section = () => {
  const homeSect = document.createElement("section");
  homeSect.classList.add("home-section");

  const title = document.createElement("h1");
  const subTitleOne = document.createElement("h6");
  const subTitleTwo = document.createElement("h6");

  title.textContent = "Before I coded, I was a chef";
  subTitleOne.textContent = "Here are some of the dishes I helped make";
  subTitleTwo.textContent = "I hope you enjoy";

  homeSect.appendChild(title);
  homeSect.appendChild(subTitleOne);
  homeSect.appendChild(subTitleTwo);

  return homeSect;
};

const footer = () => {
  const foot = document.createElement("footer");
  const para = document.createElement("p");
  const link = document.createElement("a");

  const linkText = document.createTextNode(" littleDragonShrimp");

  link.appendChild(linkText);
  link.href = "https://github.com/littledragonshrimp";

  para.classList.add("footer");
  para.textContent = "Made by ";
  para.appendChild(link);

  foot.appendChild(para);

  return foot;
};

const loadPage = () => {
  let headerAppend = header();
  let sectionAppend = section();
  let footerAppend = footer();

  const content = document.getElementById("content");
  content.appendChild(headerAppend);
  content.appendChild(sectionAppend);
  content.appendChild(footerAppend);
};

export default loadPage;
