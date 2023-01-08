const meny = document.getElementById("Meny-js");

const knapp = document.getElementById("menyButton");

function hideMeny() {
    meny.classList.toggle("hide");
    console.log("Hide funtion used.");
}

knapp.addEventListener("click", hideMeny);

const kontaktMeny = document.getElementById("Kontakt-js");

const kontaktKnapp = document.getElementById("Skicka-js");






