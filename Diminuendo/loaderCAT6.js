document.getElementById("sheleves").onclick = function (e) {
    document.getElementById("HOLDER").remove();
    let UPLOAD = e.target.id;
    
    let script = document.createElement("script");
    script.id = "HOLDER";
    script.src = "./library/" + UPLOAD;

    script.onload = function () {
        document.getElementById("iJava").innerHTML = "";
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
