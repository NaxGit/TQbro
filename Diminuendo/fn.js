// δ Delta Events

document.addEventListener
(
    "DOMContentLoaded", (event) =>
{
    const Deltahead = document.getElementById("deltaHead");
    const Cometflow = document.getElementById("cometFlow");
    const Slidemenu = document.getElementById("slideMenu");
    const Blockfind = document.getElementById("blockFind");
    const Boardvosk = document.getElementById("boardVosk");
    const Deltafoot = document.getElementById("deltaFoot");

    const SliderBtn = document.getElementById("slider");
    const SearchBtn = document.getElementById("search");
    const CometsBtn = document.getElementById("comets");

    const Keyboards = document.getElementById("alphabet");

let Oslider = 0;
let Osearch = 0;
let Ocomets = 0;

SliderBtn.addEventListener("click", (event) =>
{
if (Oslider === 0) {Slidemenu.style.height = '192px';} else {Slidemenu.style.height = '0px'}
    Oslider = Oslider === 0 ? 1 : 0;
});

SearchBtn.addEventListener("click", (event) =>
{
if (Osearch === 0) {Keyboards.style.display = 'grid';} else {Keyboards.style.display = 'none';}
    Osearch = Osearch === 0 ? 1 : 0;
});

CometsBtn.addEventListener("click", (event) =>
{
if (Ocomets === 0) {
    Blockfind.style.top = '192px';
    Cometflow.style.height = '144px'
    Comet();
}
else {
    Blockfind.style.top = '48px';
    Cometflow.style.height = '0px'
}
    Ocomets = Ocomets === 0 ? 1 : 0;
});

Keyboards.addEventListener
(
    "click", (c) =>
    {
        if (c.target.classList.contains("OSK"))
        {
            let Being = document.getElementById("search").textContent;

            if (Being === "Search") {document.getElementById("search").textContent = "";}
            
            let stroke = c.target.textContent;
            document.getElementById("search").textContent += stroke;

            JSsearch();
        }
    }
);
}
);

async function Comet() {
    const idata = await new Dexie("Uchi").open();
    const Sales = await idata.table("sales").toArray();


    let totalSell = 0;
    Sales.forEach(item => totalSell += item.Sell);

    let totalCost = 0;
    Sales.forEach(item => totalCost += item.Cost);

    let profit = totalSell - totalCost;

document.getElementById("cometSales").textContent = totalSell;
document.getElementById("cometFaida").textContent = profit;
document.getElementById("cometShift").textContent = hift;
}

function JSsearch() {

    let input = document.getElementById("search").textContent;
    console.log(input);
    input = input.toLowerCase();
    let x = document.getElementsByClassName('JSfind');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "grid";
        }
    }
}