document.getElementById("sheleves").onclick = function (e) {
    document.getElementById("HOLDER").remove();
    let UPLOAD = e.target.id;
    
    let script = document.createElement("script");
    script.id = "HOLDER";
    script.src = "./library/" + UPLOAD;

    script.onload = function () {
        iJava.innerHTML = "";
        let length = Shelf.length;
        console.log(length);
        generator(Shelf);
    };

    document.getElementById("landho").appendChild(script);
};



function generator(shelve) {
    shelve.forEach
        (
            (i) => {
                let card = document.createElement('div');
                card.id = i.SKU;
                card.className = 'JSfind';
                card.onclick = function(){Select(i)};
                card.innerHTML =
                    `
                    <img src="${"./files/" + moi + "/" + i.iIcon}">
                    <h1>${i.iName.split(" ")[0]}</h1>
                    <h2>${i.iName}</h2>
                    <small>${"./files/" + moi + "/" + i.iIcon}</small>
                    `;
                document.getElementById("iJava").append(card);
            }
        );
};

let AKport;
let Hovers = 0;
const product = {Show: '1'};

const AKcost = document.createElement('section'); AKcost.id = 'AKcost';
const AKsell = document.createElement('section'); AKsell.id = 'AKsell';
const AKqtys = document.createElement('section'); AKqtys.id = 'AKqtys';
const AKmain = document.createElement('span'); AKmain.append(AKcost, AKsell, AKqtys);

function Select(e) {
    qwerty();
    product.SKU = e.SKU;
    product.iIcon = e.iIcon;
    product.iName = e.iName;
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

    switch (AKport)
    {
        case "AKcost": AKcost.classList.add("AKhigh"); break;
        case "AKsell": AKsell.classList.add("AKhigh"); break;
        case "AKqtys": AKqtys.classList.add("AKhigh"); break;
        default: // code block
        break;
    }
});

document.getElementById("alphabet").addEventListener("click", (event) => {
    if (event.target.classList.contains("NumLock")) {
        let digit = event.target.id;

        if (isNaN(digit) === true) {
            if (digit === "C") {
                document.getElementById(AKport).textContent = "";
            }

            if (digit === "K") {
                product.Cost = AKcost.textContent;
                product.Sell = AKsell.textContent;
                product.Qtys = AKqtys.textContent;
                alert(product);
                // stockItem(product);
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


document.addEventListener("scroll", (event) => {
    document.getElementById("alphabet").style.display = 'none';
});

async function stockItem() {

    let ilink = await new Dexie("Uchi").open();
    let table = await ilink.table("stock");
    let addin = await table.put(product);

}

// const numeric = document.getElementById("numerica");

// const product = {Show: '1'};

// iJava.addEventListener("click", (event) => {
//     if (event.target.classList.contains("catalogueCard")) {
//         numeric.style.display = 'grid';
//         event.target.classList.add("neuralCard");
//         product.SKU = event.target.id;
//         product.Name = document.getElementById(event.target.id).querySelector("p").textContent;

//         product.Imge = document.getElementById(event.target.id).querySelector("small").textContent;

//         console.log(product);
//     }
//     if (event.target.parentNode.classList.contains("catalogueCard")) {
//         numeric.style.display = 'grid';
//         event.target.parentNode.classList.add("neuralCard");
//         product.SKU = event.target.parentNode.id;
//         product.Name = document.getElementById(event.target.parentNode.id).querySelector("p").textContent;

//         product.Imge = document.getElementById(event.target.parentNode.id).querySelector("small").textContent;

//         console.log(product);
//     }
// });