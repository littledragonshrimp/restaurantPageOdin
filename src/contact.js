const section = () => {
  const contactSect = document.createElement("section");
  contactSect.classList.add("contact-section");

  const title = document.createElement("h1");
  const subTitleOne = document.createElement("h6");
  const subTitleTwo = document.createElement("h6");
  const subTitleThree = document.createElement("h6");

  title.textContent = "We would love to hear from you!";
  subTitleOne.textContent = "Phone: 555.555.1234";
  subTitleTwo.textContent = "Email: info@theopentable.com";
  subTitleThree.textContent = "Address: 123 Main St";

  contactSect.appendChild(title);
  contactSect.appendChild(subTitleOne);
  contactSect.appendChild(subTitleTwo);
  contactSect.appendChild(subTitleThree);

  return contactSect;
};

const contactActive = () => {
  const btns = Array.from(document.querySelectorAll(".btn"));
  btns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
  const contactBtn = document.getElementById("contact");
  contactBtn.classList.add("active");
};

const contact = () => {
  contactActive();
  let sectionAppend = section();
  let sectionRemove = document.querySelector("section");

  const content = document.getElementById("content");
  content.removeChild(sectionRemove);
  content.appendChild(sectionAppend);
};

export default contact;
