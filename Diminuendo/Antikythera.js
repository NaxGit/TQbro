let AKport;
let Hovers = 0;
const product = { Show: 1 };

const AKcost = document.createElement('section'); AKcost.id = 'AKcost';
const AKsell = document.createElement('section'); AKsell.id = 'AKsell';
const AKqtys = document.createElement('section'); AKqtys.id = 'AKqtys';
const AKmain = document.createElement('span'); AKmain.append(AKcost, AKsell, AKqtys);

function Select(e) {

    document.getElementById(e.SKU).scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    product.SKU = e.SKU;
    product.iIcon = "./files/" + moi + "/" + e.iIcon;
    product.iName = e.iName;

    document.getElementById("alphabet").style.display = "grid";

    if (Hovers != e.SKU) {
        if (Hovers != 0) {
            document.getElementById(Hovers).classList.remove("catalogueHigh");
        }
        let cell = document.getElementById(e.SKU);
        cell.after(AKmain);
        cell.classList.add("catalogueHigh");

        AKcost.innerHTML = '';
        AKsell.innerHTML = '';
        AKqtys.innerHTML = '';

        AKcost.classList.remove("AKhigh");
        AKsell.classList.remove("AKhigh");
        AKqtys.classList.remove("AKhigh");
    }
    Hovers = e.SKU;
}

AKmain.addEventListener("click", (event) => {
    AKport = event.target.id;

    AKcost.classList.remove("AKhigh");
    AKsell.classList.remove("AKhigh");
    AKqtys.classList.remove("AKhigh");

    switch (AKport) {
        case "AKcost": AKcost.classList.add("AKhigh"); break;
        case "AKsell": AKsell.classList.add("AKhigh"); break;
        case "AKqtys": AKqtys.classList.add("AKhigh"); break;
        default: // code block
            break;
    }
});

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  

document.getElementById("alphabet").addEventListener("click", (event) => {
    if (event.target.classList.contains("NumLock")) {
        let digit = event.target.id;

        if (isNaN(digit) === true) {
            if (digit === "C") {
                document.getElementById(AKport).textContent = "";
            }

            if (digit === "K") {
                product.Cost = Number(AKcost.textContent);
                product.Sell = Number(AKsell.textContent);
                product.Qtys = Number(AKqtys.textContent);
                stockItem(product);
            }
        }

        if (isNaN(digit) === false) {
            switch (AKport) {
                case "AKcost": let oldcost = AKcost.textContent; let addcost = oldcost += event.target.id; AKcost.innerHTML = addcost; break;
                case "AKsell": let oldsell = AKsell.textContent; let addsell = oldsell += event.target.id; AKsell.innerHTML = addsell; break;
                case "AKqtys": let oldqtys = AKqtys.textContent; let addqtys = oldqtys += event.target.id; AKqtys.innerHTML = addqtys; break;

                default:
                    console.log("(AKport) not selected is " + AKport);
                    break;
            }
        }
    }
});

});



async function stockItem(p) {
    let ilink = await new Dexie("Uchi").open();
    let table = await ilink.table("stock");
    let addin = await table.put(product);
}


// iJava.addEventListener("click", (event) => {
//     if (event.target.classList.contains("catalogueCard")) {
//         numeric.style.display = 'grid';
//         event.target.classList.add("neuralCard");
//         product.SKU = event.target.id;
//         product.Name = document.getElementById(event.target.id).querySelector("p").textContent;

//         product.Imge = document.getElementById(event.target.id).querySelector("small").textContent;

//         console.log(product);
//     }