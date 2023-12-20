document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded [initialize.js]");
    initial();
});

function initial() {
    const Index = new Dexie("Uchi").open().then().catch(Error, e => {
        let idata; const AOL = indexedDB.open("Uchi", 1); AOL.onsuccess = () => { idata = AOL.result; linux(); };

        AOL.onupgradeneeded = function (e) {
            idata = e.target.result;
            const stock = idata.createObjectStore("stock", { keyPath: "SKU" }); stock.createIndex("Show", "Show", { unique: false });

            let sales = idata.createObjectStore("sales", { keyPath: "Stamp" });
            sales.createIndex("Shift", "Shift", { unique: false });
            sales.createIndex("Stock", "LiqU", { unique: false });

            const files = idata.createObjectStore("files", { keyPath: "Match" });
        };

        function linux() {
            let shift = idata.transaction("files", "readwrite").objectStore("files").add({ Match: "shift", port: 1 });

            homevia();
        };

        function homevia() { console.log("indexDB initialized"); };

    });
}
