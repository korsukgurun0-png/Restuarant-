const contactPage = ()=>{
    const contactContainer = document.createElement("div");
    contactContainer.id = "contactContainer";

    //contact us form
    const formContainer = document.createElement("div");
    formContainer.id = "formContainer";

    let form = document.createElement("form");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.size = 50;
    input.placeholder = "Enter message here"

    const formBtn = document.createElement("button");
    formBtn.textContent = "Submit";
    formBtn.id = "formBtn"

    formContainer.appendChild(form);
    formContainer.appendChild(input);
    formContainer.appendChild(formBtn);

    //phone
    const phoneContainer = document.createElement("div");
    const phone = document.createElement("a");
    phone.href = "tel:5095932589";
    phone.appendChild(document.createTextNode("Call us on 5095932589"));

    const phoneIcon = document.createElement("i");
    phoneIcon.className = "fa-solid fa-phone";

    phoneContainer.appendChild(phoneIcon);
    phoneContainer.appendChild(phone);

    //address
    const addressContainer = document.createElement("div");

    const address = document.createElement("p");
    address.textContent = "Hai Kuwait Munuki Payam";

    const addressIcon = document.createElement("i");
    addressIcon.className = "fa-solid fa-address-card";

    addressContainer.appendChild(addressIcon);
    addressContainer.appendChild(address);
    addressContainer.id = "addressContainer";

    //email
    const emailContainer = document.createElement("div");

    const email = document.createElement("a");
    email.href = "mailto:ad18gkor@loremsum.com";
    email.textContent = "Email us at ad18gkor@loremsum.com";

    const emailIcon = document.createElement("i");
    email.className = "fa-solid fa-at";

    emailContainer.appendChild(emailIcon);
    emailContainer.appendChild(email);
    emailContainer.id = "emailContainer";

    //Appending to the contactContainer
    contactContainer.appendChild(formContainer);
    contactContainer.appendChild(phoneContainer);
    contactContainer.appendChild(addressContainer);
    contactContainer.appendChild(emailContainer);

    return contactContainer;
};

const buildContactPage = ()=>{
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(contactPage())
}

export default buildContactPage;