/* δ Delta components [Steptronic] */

document.addEventListener("DOMContentLoaded", (event) =>
{

// δ DeltaHead
const icon = document.createElement("div"); icon.textContent = "⊤⌕";
const info = document.createElement("div"); info.textContent = "";
const menu = document.createElement("div"); menu.textContent = "☰";
document.getElementById("deltaHead").append(icon, info, menu);

// δ SearchBar
const find = document.createElement("div"); find.textContent = "Search"; find.id = "search";
document.getElementById("searchBar").append(find);

// δ KeyBoards
const osks = document.createElement("div"); osks.textContent = "";
document.getElementById("keyBoards").append(osks);

// δ DeltaFoot
const home = document.createElement('div'); home.textContent = "◯";
const bill = document.createElement('div'); bill.textContent = "⎙";
const fafa = document.createElement('div'); fafa.textContent = "⌘";
const dada = document.createElement('div'); dada.textContent = "…";
document.getElementById("deltaFoot").append(home, bill, fafa, dada);


// δ Delta.onclick

const alphabet = document.getElementById("Board");
const numerica = document.getElementById("AKmachine");

menu.onclick = function(){ document.getElementById("keyBoards").append(alphabet);};
find.onclick = function(){ document.getElementById("keyBoards").append(numerica);};


const Board = document.getElementById("keyBoards");
Board.addEventListener
(
    "click", (c) =>
    {
        if (c.target.classList.contains("OSK"))
        {
            let Being = document.getElementById("search").textContent;
            
            if (Being === "Search") {document.getElementById("search").textContent = "";}
            
            let stroke = c.target.textContent;
            document.getElementById("search").textContent += stroke; console.log("dsa");
        }
    }
);

});