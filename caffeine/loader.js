const iJava = document.getElementById("iJava");


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
                let clone = document.createElement('div');
                clone.innerHTML =
                    `
                    <div id="${i.SKU}" class="catalogueCard JSfind">
                    <img src="${"./files/" + moi + "/" + i.iIcon}">
                    <h5>${i.iName.split(" ")[0]}</h5>
                    <p>${i.iName}</p>
                    </div>
                    `;
                iJava.append(clone);
            }
        );
};

const grind = document.getElementById("AKmachine");

iJava.addEventListener("click", (event) => {
    if (event.target.classList.contains("catalogueCard")) {
        event.target.classList.add("neuralCard");
        document.getElementById(event.target.id).parentElement.append(grind);
        product.SKU = event.target.id;
        product.Name = document.getElementById(event.target.id).querySelector("p").textContent;
    }
    if (event.target.parentNode.classList.contains("catalogueCard")) {
        event.target.parentNode.classList.add("neuralCard");
        document.getElementById(event.target.parentNode.id).parentElement.append(grind);
        product.SKU = event.target.parentNode.id;
        product.Name = document.getElementById(event.target.parentNode.id).querySelector("p").textContent;
    }
});