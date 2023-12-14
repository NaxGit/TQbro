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

menu.onclick = function(){opener()};

function opener() {
    window.location.href = "./page.html";
}

// δ Delta.onclick

// const iJava = document.getElementById("iJava");
// const alphabet = document.getElementById("alphabet");
// const numerica = document.getElementById("numerica");

// find.onclick = function(){ document.getElementById("keyBoards").append(alphabet);};

// menu.onclick = function(){};

// iJava.addEventListener
// (
//     "click", (c) =>
//     {
//         if (c.target.classList.contains("catalogueCard"))
//         {
//             console.log("Card Clicked" + event.target.id);
//         }
//     }
// );

// alphabet.addEventListener
// (
//     "click", (c) =>
//     {
//         if (c.target.classList.contains("OSK"))
//         {
//             let Being = document.getElementById("search").textContent;
            
//             if (Being === "Search") {document.getElementById("search").textContent = "";}
            
//             let stroke = c.target.textContent;
//             document.getElementById("search").textContent += stroke; console.log("dsa");
//         }
//     }
// );



// numerica.addEventListener
// (
//     "click", (c) =>
//     {
//         if (c.target.classList.contains("NumLock"))
//         {
//             let digit = event.target.id;

//             console.log("Number PRESS");
            
//             if (isNaN(digit) === true)
//             {
//                 if (digit === "C") {
//                     document.getElementById(AKport).textContent = "";
//                 }
    
//                 if (digit === "OK") {
//                     product.Cost = AKcost.textContent;
//                     product.Sell = AKsell.textContent;
//                     product.Qtys = AKmany.textContent;
//                     addtocat6(product);
//                 }
//             }
    
//         if (isNaN(digit) === false)
//         {
//             switch (AKport)
//             {
//             case "AKcost": let oldcost = AKcost.textContent; let addcost = oldcost += event.target.id; AKcost.innerHTML = addcost; break;
//             case "AKsell": let oldsell = AKsell.textContent; let addsell = oldsell += event.target.id; AKsell.innerHTML = addsell; break;
//             case "AKmany": let oldmany = AKmany.textContent; let addmany = oldmany += event.target.id; AKmany.innerHTML = addmany; break;
            
//             default:
//                 console.log("(AKport) not selected is " + AKport);
//                 break;
//             }
//         }
    
//         event.target.classList.add("neural");
    
//     }
//     }
// );

});