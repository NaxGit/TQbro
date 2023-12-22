// δ Delta Events

document.addEventListener
    ("DOMContentLoaded", (event) => {
        const Deltahead = document.getElementById("deltaHead");
        const Cometflow = document.getElementById("cometFlow");
        const Slidemenu = document.getElementById("slideMenu");
        const Blockfind = document.getElementById("blockFind");
        const Boardvosk = document.getElementById("boardVosk");
        const Deltafoot = document.getElementById("deltaFoot");

        const SliderBtn = document.getElementById("slider");
        const SearchBtn = document.getElementById("search");
        const CometsBtn = document.getElementById("comets");

        const alphabets = document.getElementById("alphabet");

        // Listener's

        SliderBtn.addEventListener("click", (event) => {
            if (Slidemenu.style.height === '192px') { Slidemenu.style.height = '0px'; }
            else { Slidemenu.style.height = '192px'; }
        });

        CometsBtn.addEventListener("click", (event) => {
            if (Blockfind.style.top === '192px') {
                Blockfind.style.top = '48px';
                Cometflow.style.height = '0px'
            } else {
                Blockfind.style.top = '192px';
                Cometflow.style.height = '144px'
                Comet();
            }
        });

        SearchBtn.addEventListener("click", (event) => {
            if (alphabets.style.display === 'grid') {
                alphabets.style.display = 'none';
            } else {
                alphabets.style.display = 'grid';
            }
        });

        // Deltafoot.addEventListener("click", (event) => {
        //     if (numericas.style.display === 'grid') {
        //         numericas.style.display = 'none';
        //         alphabets.style.display = 'none';
        //     } else {
        //         numericas.style.display = 'grid';
        //         alphabets.style.display = 'none';
        //     }
        // });
    }
    );


function numlock() {
    if (numericas.style.display === 'grid') {
        numericas.style.display = 'none';
        alphabets.style.display = 'none';
    } else {
        numericas.style.display = 'grid';
        alphabets.style.display = 'none';
    }
}


function qwerty() {
    const alphabets = document.getElementById("alphabet");
    if (alphabets.style.display === 'grid') {
        alphabets.style.display = 'none';
    } else {
        alphabets.style.display = 'grid';
    }
}

async function Comet() {
    const idata = await new Dexie("Uchi").open();
    const Stock = await idata.table("stock").toArray();
    
    let totalSales = 0; Stock.forEach((item) => { totalSales += item.Sell; }); console.log(totalSales);

    // let totalSales = 0; Stock.forEach((item) => { totalSales += item.Sell; }); console.log(totalSales);
    
    document.getElementById("cometSales").textContent = totalSales;
}


window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = -96;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 10);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}