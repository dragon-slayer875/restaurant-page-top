import Img from "./2150690631.jpg";

export default function Menu() {
    const menuContent = document.createElement("div");
    const menuTable = document.createElement("div");
    const menuCard = document.createElement("div");
    const menuItemImg = new Image();
    const menuHeading = document.createElement("h1");
    const menuItemHeading = document.createElement("h2");
    const menuText = document.createElement("p");

    menuItemImg.src = Img;
    menuItemImg.alt = "Menu Item";
    menuContent.classList.add("tab-content");
    menuContent.setAttribute("id", "menu-content");
    menuTable.classList.add("menu-table");
    menuCard.classList.add("menu-card");
    menuHeading.textContent = "Choose Whatever you want!";
    menuItemHeading.textContent = "Menu Item";
    menuText.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    menuContent.appendChild(menuHeading);
    menuContent.appendChild(menuTable);
    menuCard.appendChild(menuItemImg);
    menuCard.appendChild(menuItemHeading);
    menuCard.appendChild(menuText);
    for (let i = 0; i < 4; i++) {
        menuTable.appendChild(menuCard.cloneNode(true));
    }

    return menuContent;
}
