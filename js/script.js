console.log("Hello, fellas developas!");

let button1 = document.querySelector(".js-button1");
let body = document.querySelector(".body");
let button2 = document.querySelector(".js-button2");
let header = document.querySelector(".body__header");

button1.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    
    button1.innerText = body.classList.contains("body--dark")
    ?
    "Jasny kolor tła"
    :
    "Ciemny kolor tła";
})

button2.addEventListener("click", () => {
    header.classList.toggle("body__header--changed");
})