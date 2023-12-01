// AntiKythera

document.head.innerHTML += `<style>

#AKmachine {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 2fr;
    color: rgba(33, 37, 41, 1);
}

#AKdisplay {padding: 0.5rem 0.0rem 0.5rem 0.5rem;}
#AKdisplay > div {}
#AKnumeric {padding: 0.5rem 0.5rem 0.5rem 0.5rem; display: grid; gap: 0.5em; grid-template-columns: repeat(3, 1fr);}
#AKnumeric > div {
    aspect-ratio: 1/0.618;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(32, 201, 151, 1);
    border-radius: 0.375rem;
  }

.AKport {border: 1px solid rgba(32, 201, 151, 1); margin-bottom: 0.5rem;}
.AKhigh {background-color: rgba(255, 255, 255, 0.5);}

#AKcost::before {content: 'Cost: '; padding-left: 0.5rem;}
#AKsell::before {content: 'Sell: '; padding-left: 0.5rem;}
#AKmany::before {content: 'Qty: '; padding-left: 0.5rem;}

</style>`;

let AKport;

const AKmachine = document.createElement("div"); AKmachine.id = "AKmachine";
const AKdisplay = document.createElement("div"); AKdisplay.id = "AKdisplay";
const AKnumeric = document.createElement("div"); AKnumeric.id = "AKnumeric";

const AKcost = document.createElement("div"); AKcost.id = "AKcost"; AKcost.className = "AKport";
const AKsell = document.createElement("div"); AKsell.id = "AKsell"; AKsell.className = "AKport";
const AKmany = document.createElement("div"); AKmany.id = "AKmany"; AKmany.className = "AKport";

const glyphs = [1,2,3,4,5,6,7,8,9,0,"C","OK"];

glyphs.forEach(glyph => {
    let tap = document.createElement("div");
        tap.id = glyph;
        tap.className = "NumLock";
        tap.textContent = glyph;
    AKnumeric.append(tap);
});

AKdisplay.append(AKcost, AKsell, AKmany);
AKmachine.append(AKdisplay, AKnumeric);

let Div = document.createElement("div");
Div.className = "Cardslot";

Div.append(AKmachine);


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
                console.log(AKport);
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