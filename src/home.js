import Img from "./2150690631.jpg";

export default function Home() {
    const homeContent = document.createElement("div");
    const homeContentContainer = document.createElement("div");
    const homeHeading = document.createElement("h1");
    const homeImg = new Image();
    const homeText = document.createElement("p");

    homeText.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.";
    homeImg.src = Img;
    homeImg.alt = "Restaurant";
    homeHeading.textContent = "Welcome to the Restaurant";

    homeContent.classList.add("tab-content");
    homeContent.setAttribute("id", "home-content");
    homeContentContainer.classList.add("home-content-container");

    homeContent.appendChild(homeContentContainer);
    homeContentContainer.appendChild(homeHeading);
    homeContentContainer.appendChild(homeImg);
    homeContentContainer.appendChild(homeText);

    return homeContent;
}
