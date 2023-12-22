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

}
);

async function Comet() {
    const idata = await new Dexie("Uchi").open();
    const Stock = await idata.table("stock").toArray();
    
    let totalSales = 0; Stock.forEach((item) => { totalSales += item.Sell; });

    // let totalSales = 0; Stock.forEach((item) => { totalSales += item.Sell; }); console.log(totalSales);
    
    document.getElementById("cometSales").textContent = totalSales;
}