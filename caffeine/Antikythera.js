// AntiKythera |o| virtualKeys

let AKport;



AKdisplay.addEventListener
("touchstart", (event) =>
{
    if (event.target.classList.contains("AKport"))
{
    AKport = event.target.id;

    AKcost.classList.remove("AKhigh");
    AKsell.classList.remove("AKhigh");
    AKmany.classList.remove("AKhigh");

    switch (AKport)
    {
        case "AKcost": AKcost.classList.add("AKhigh"); break;
        case "AKsell": AKsell.classList.add("AKhigh"); break;
        case "AKmany": AKmany.classList.add("AKhigh"); break;
        
        default:
            // code block
            break;
    }
}
}
)

const product = {Show: '1'};


AKnumeric.addEventListener
("touchstart", (event) =>
{
    if (event.target.classList.contains("NumLock"))
{
        let digit = event.target.id;
        
        if (isNaN(digit) === true)
        {
            if (digit === "C") {
                document.getElementById(AKport).textContent = "";
            }

            if (digit === "OK") {
                product.Cost = AKcost.textContent;
                product.Sell = AKsell.textContent;
                product.Qtys = AKmany.textContent;
                addtocat6(product);
            }
        }

    if (isNaN(digit) === false)
    {
        switch (AKport)
        {
        case "AKcost": let oldcost = AKcost.textContent; let addcost = oldcost += event.target.id; AKcost.innerHTML = addcost; break;
        case "AKsell": let oldsell = AKsell.textContent; let addsell = oldsell += event.target.id; AKsell.innerHTML = addsell; break;
        case "AKmany": let oldmany = AKmany.textContent; let addmany = oldmany += event.target.id; AKmany.innerHTML = addmany; break;
        
        default:
            console.log("(AKport) not selected is " + AKport);
            break;
        }
    }

    event.target.classList.add("neural");

}
}
)



AKnumeric.addEventListener
("touchend", (event) =>
{
    if (event.target.classList.contains("NumLock"))
{

    event.target.classList.remove("neural");

}
}
)



async function addtocat6(params) {

    let ilink = await new Dexie("Uchi").open();
    let table = await ilink.table("stock");
    let addin = await table.put(product);

    showaddedtocat6(addin);
}

async function showaddedtocat6(key)
{
    let ilink = await new Dexie("Uchi").open();
    let table = await ilink.table("stock");
    let added = await table.get(key);

    let nCost = document.createElement("span"); nCost.textContent = "Cost " + added.Cost;
    let nSell = document.createElement("span"); nSell.textContent = "Sell " + added.Sell;
    let nQtys = document.createElement("span"); nQtys.textContent = "Stock " + added.Qtys;
    let Shows = document.createElement("div");
    Shows.append(nCost, nSell, nQtys);
    document.getElementById(key).append(Shows);

}