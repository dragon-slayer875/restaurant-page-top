import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

(function () {
    const content = document.getElementById("content");
    const navbar = document.createElement("div");
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const main = document.createElement("div");
    const contact = document.createElement("div");
    const homeText = document.createElement("p");
    const menuText = document.createElement("p");
    const contactText = document.createElement("p");

    navbar.classList.add("navbar");
    home.classList.add("tab");
    home.classList.add("active");
    home.setAttribute("id", "home");
    menu.classList.add("tab");
    menu.setAttribute("id", "menu");
    contact.classList.add("tab");
    contact.setAttribute("id", "contact");
    homeText.textContent = "Home";
    menuText.textContent = "Menu";
    contactText.textContent = "Contact";
    main.classList.add("main");

    home.appendChild(homeText);
    menu.appendChild(menuText);
    contact.appendChild(contactText);
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    content.appendChild(navbar);
    content.appendChild(main);

    main.appendChild(home());

    home.addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(home());
    });

    menu.addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(menu());
    });

    contact.addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(contact());
    });

    // const tabs = document.querySelectorAll(".tab");
    // tabs.forEach((tab) => {
    //     tab.addEventListener("click", () => {
    //         main.innerHTML = "";
    //         main.appendChild(tab.id);
    //     });
    // });
    
})();
