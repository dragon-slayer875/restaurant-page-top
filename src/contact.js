export default function Contact() {
    const contactcontainer = document.createElement("div");
    const contactHeading = document.createElement("h1");
    const contactForm = document.createElement("form");
    const contactName = document.createElement("input");
    const contactEmail = document.createElement("input");
    const contactMessage = document.createElement("textarea");
    const contactSubmit = document.createElement("input");
    
    contactcontainer.classList.add("tab-content");
    contactcontainer.setAttribute("id", "contact-content");
    contactHeading.textContent = "Contact Us";
    contactForm.classList.add("contact-form");
    contactName.setAttribute("type", "text");
    contactName.setAttribute("placeholder", "Name");
    contactEmail.setAttribute("type", "email");
    contactEmail.setAttribute("placeholder", "Email");
    contactMessage.setAttribute("placeholder", "Message");
    contactMessage.setAttribute("rows", "10");
    contactMessage.setAttribute("cols", "50");
    contactSubmit.setAttribute("type", "submit");
    contactSubmit.setAttribute("value", "Submit");

    contactForm.appendChild(contactName);
    contactForm.appendChild(contactEmail);
    contactForm.appendChild(contactMessage);
    contactForm.appendChild(contactSubmit);
    contactcontainer.appendChild(contactHeading);
    contactcontainer.appendChild(contactForm);

    return contactcontainer;
}