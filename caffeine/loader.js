const iJava = document.getElementById("iJava");


document.getElementById("sheleves").onclick = function (e) {
    document.getElementById("HOLDER").remove();
    let UPLOAD = e.target.id;
    // console.log(UPLOAD);
    
    activebutton(UPLOAD);
    
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
                    <div id="${i.SKU}" class="Cardc">
                    <img src="${"./files/" + moi + "/" + i.iIcon}">
                    <h5>${i.iName.split(" ")[0]}</h5>
                    <p class="mb-0">${i.iName}</p>
                    </div>
                    `;
                iJava.append(clone);
            }
        );
};


function activebutton(activate) {
    x = document.getElementsByClassName("btn");
    for (var i = 0; i < x.length; i++) { x[i].classList = "btn btn-info"; }
    document.getElementById(activate).classList = "btn btn-secondary";
};


iJava.addEventListener("touchstart", (event) =>
{
    if (event.target.classList.contains("Cardc"))            {event.target.classList.add("neural");            perceive(event.target.id);}
    if (event.target.parentNode.classList.contains("Cardc")) {event.target.parentNode.classList.add("neural"); perceive(event.target.parentNode.id);}
})

// iJava.addEventListener("touchend", (event) =>
// {
// if (event.target.classList.contains("Cardc") || event.target.parentNode.classList.contains("Cardc"))
// {
//     event.target.classList.remove("neural") || event.target.parentNode.classList.remove("neural");
// }})

function perceive(id) {
     
document.getElementById(id).parentElement.append(Div);

}