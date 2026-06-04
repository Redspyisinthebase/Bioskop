const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const filter = searchInput.value.toLowerCase();

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const title =
card.querySelector("h3")
.textContent
.toLowerCase();

card.style.display =
title.includes(filter)
? "block"
: "none";

});

});

}
