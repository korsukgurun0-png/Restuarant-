import buildHomePage from "./home.js";
import buildMenuPage from "./menu.js";
import buildContactPage from "./contact.js";

import Logo from "./images/Logo.svg";


//header contains name, logo, navbar
const buildHeader = ()=>{
    const header = document.createElement("header");
    const headerContainer = document.createElement("div");
    headerContainer.className = "header-container";
    const name = document.createElement("h1");
    name.textContent = "Gurun's Restaurant"

    const logo = new Image();
    logo.className = "logo";
    logo.src = Logo;

    headerContainer.appendChild(logo);
    headerContainer.appendChild(name);
    header.appendChild(headerContainer);
    header.appendChild(buildNavBar());

    return header;
};

//Navbar contains buttons for home, menu and contact
const buildNavBar = ()=>{
    const navBar = document.createElement("navbar");
    navBar.id = "navbar"

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e)=>{
        buildHomePage();
    });

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", (e)=>{
        buildMenuPage();
    });

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", (e)=>{
        buildContactPage();
    });

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    return navBar;
}

//main content
const buildMain = ()=>{
    const main = document.createElement("main");
    main.setAttribute("id","main");

    return main;
}

//footer
const buildFooter = ()=>{
    const footer = document.createElement("footer");

    const author = document.createElement("p");
    author.textContent = "Created by Gurun Anthony"

    const ghIcon = document.createElement("i");
    ghIcon.className = "fa-brands fa-github"

    const ghLink = document.createElement("a");
    ghLink.href = "https://superjim.github.io/"

    author.appendChild(ghIcon);
    ghLink.appendChild(author);
    footer.appendChild(ghLink);

    return footer;
}

//buildWebsite
const buildWebsite = ()=>{
    const content = document.getElementById("content");

    content.appendChild(buildHeader());
    content.appendChild(buildMain());
    content.appendChild(buildFooter());
    buildHomePage();
}

export default buildWebsite;