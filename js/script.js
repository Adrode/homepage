{
    const welcome = () => {
        console.log("Hello, fellas developas!");
    }

    const toggleBackground = (toggleThemeButton) => {
        const body = document.querySelector(".js-body");
        body.classList.toggle("body--dark");
        const toggleButtonInnerText = document.querySelector(".js-toggleThemeButton");
        toggleButtonInnerText.innerText = body.classList.contains("body--dark") ? "Jasny kolor tła" : "Ciemny kolor tła";
    }

    const toggleHeaderColor = () => {
        const header = document.querySelector(".js-bodyHeader");
        header.classList.toggle("body__header--secondary");
    }

    const init = () => {
        const toggleThemeButton = document.querySelector(".js-toggleThemeButton");
        const toggleHeaderColorButton = document.querySelector(".js-toggleHeaderColorButton");

        toggleThemeButton.addEventListener("click", toggleBackground);
        toggleHeaderColorButton.addEventListener("click", toggleHeaderColor);

        welcome();
    }

    init();
}