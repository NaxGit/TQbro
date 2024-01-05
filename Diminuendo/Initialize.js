document.addEventListener("DOMContentLoaded", (event) => {
    console.log("[initialize.js]");
    initial();
});

function initial() {
    const Index = new Dexie("Uchi").open().then().catch(Error, e => {
        
        let idata;
        
        const AOL = indexedDB.open("Uchi", 1);
        AOL.onsuccess = () => { idata = AOL.result; linux(); };

        AOL.onupgradeneeded = function (e) {
            idata = e.target.result;

            const stock = idata.createObjectStore("stock", { keyPath: "SKU" });
            stock.createIndex("Show", "Show", { unique: false });

            const sales = idata.createObjectStore("sales", { keyPath: "Stamp" });
            sales.createIndex("Shift", "Shift", { unique: false });

            const shift = idata.createObjectStore("files", { keyPath: "Match" });
        };

        function linux() {
            let shift = idata.transaction("files", "readwrite").objectStore("files").add({ Match: "shift", port: 1 });

            homevia();
        };

        function homevia() { console.log("indexDB initialized"); };

    });
}

let ilink;
async function openonce() {
    try {
        ilink = await new Dexie("Uchi").open();
        console.log("Database opened successfully!");
        // Additional operations after successful opening
    } catch (error) {
        console.error("Error opening database:", error);
    }
}

// Call the openonce function
openonce();

let hift;
async function setShift() {
    
    let idata = await new Dexie("Uchi").open();
    let files = await idata.table("files");
    let Match = await files.get({ Match: "shift" });

    hift = Match.port;

}
setShift();


async function fetchData() {
    try {
        // Open the database
        let idata = await new Dexie("Uchi").open();
        console.log("Database opened successfully!");

        // Access the "files" table
        let files = idata.table("files");

        // Retrieve a record where "Match" is equal to "shift"
        let Match = await files.get({ Match: "shift" });

        // Check if a matching record was found
        if (Match) {
            // Assign the value of the "port" property to the "Shift" variable
            let Shift = Match.port;
            console.log("Shift:", Shift);
        } else {
            console.log("No record found with Match: 'shift'");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the fetchData function
// fetchData();
