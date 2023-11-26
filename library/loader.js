const llframe = document.getElementById("Menu");


document.getElementById("loadSoda").onclick = function () {
    var script = document.createElement("script");
    script.src = "./library/Soda.js";

    script.onload = function () {
        llframe.innerHTML = "";
        console.log("Soda done");
        browse(ShelfSoda, "Soda");
    };

    // append and execute script
    document.documentElement.firstChild.appendChild(script);
};

document.getElementById("loadOil").onclick = function () {
    var script = document.createElement("script");
    script.src = "./library/Oil_Mafuta.js";

    script.onload = function () {
        llframe.innerHTML = "";
        console.log("Oil loaded");
        browse(ShelfOil, "Oil_Mafuta");
    };

    // append and execute script
    document.documentElement.firstChild.appendChild(script);
};

document.getElementById("loadUnga").onclick = function () {
    var script = document.createElement("script");
    script.src = "./library/Flour_Unga.js";

    script.onload = function () {
        llframe.innerHTML = "";
        console.log("unga");
        browse(ShelfUnga, "Flour_Unga");
    };

    // append and execute script
    document.documentElement.firstChild.appendChild(script);
};