import "./style.css";
import Home from "./home.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

(function index() {
    const content = document.getElementById("content");
    const navbar = document.createElement("div");
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const main = document.createElement("div");
    const contact = document.createElement("div");
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const contactButton = document.createElement("button");

    navbar.classList.add("navbar");
    home.classList.add("tab");
    home.classList.add("active");
    home.setAttribute("id", "Home");
    menu.classList.add("tab");
    menu.setAttribute("id", "Menu");
    contact.classList.add("tab");
    contact.setAttribute("id", "Contact");
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactButton.textContent = "Contact";
    main.classList.add("main");

    home.appendChild(homeButton);
    menu.appendChild(menuButton);
    contact.appendChild(contactButton);
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    content.appendChild(navbar);
    content.appendChild(main);

    main.appendChild(Home());

    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            main.innerHTML = "";
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tab.classList.add("active");
            switch (tab.id) {
                case "Home":
                    main.appendChild(Home());
                    break;
                case "Menu":
                    main.appendChild(Menu());
                    break;
                case "Contact":
                    main.appendChild(Contact());
                    break;
            }
        });
    });
})();
