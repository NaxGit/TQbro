function browse(Shelf, pug) {
    const frame = document.getElementById("Menu");

    Shelf.forEach(
        (i) => {

            let URL = "./"+pug+"/holder".replace("holder", i.iIcon);
            let Nick = i.iName.split(" ")[0];
            let Full = i.iName;

            let landing = document.createElement('div');
            landing.innerHTML =
                `
                <div class="card m-2 JSfind">
                <div class="row g-0">
                <div class="col-4">
                <img src="${URL}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-8">
                <div class="card-body">
                <h5 class="card-title">${Nick}</h5>
                <p class="card-text">${Full}</p>
                <p class="card-text"><small class="text-body-secondary">Stock</small></p>
                </div>
                </div>
                </div>
                </div>
                `;

            frame.append(landing);
        });
}

document.addEventListener("DOMContentLoaded", (event) => { console.log("DOM fully loaded and parsed"); });

function JSsearch() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('JSfind');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}