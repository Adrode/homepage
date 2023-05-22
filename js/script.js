{
    const welcome = () => {
        console.log("Hello, fellas developas!");
    }

    const toggleBackground = (button1) => {
        const body = document.querySelector(".body");
        body.classList.toggle("body--dark");
        button1.innerText = body.classList.contains("body--dark") ? "Jasny kolor tła" : "Ciemny kolor tła";
    }

    const toggleHeaderColor = () => {
        const header = document.querySelector(".body__header");
        header.classList.toggle("body__header--changed");
    }

    const init = () => {
        const button1 = document.querySelector(".js-button1");
        const button2 = document.querySelector(".js-button2");

        button1.addEventListener("click", toggleBackground);
        button2.addEventListener("click", toggleHeaderColor);

        welcome();
    }

    init();
}