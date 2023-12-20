// δ Delta components [Steptronic]

class DeltaHead extends HTMLElement {
    connectedCallback() {
        this.id = 'deltaHead',
            this.className = 'Delta';
        this.innerHTML = '<div>⊤⌕</div><div></div><div id="slider">☰</div>';
    }
} customElements.define("delta-head", DeltaHead);

class CometFlow extends HTMLElement {
    connectedCallback() {
        this.id = 'cometFlow';
        this.className = 'Delta';
        this.innerHTML = '<div id=""><div>⛱</div><div>Sales</div></div><div id=""><div>⛲</div><div>Prof</div></div><div id=""><div>⛴</div><div>Stock</div></div><div id=""><div>⛽</div><div>info</div></div>';
    }
} customElements.define("comet-flow", CometFlow);

class SlideMenu extends HTMLElement {
    connectedCallback() {
        this.id = 'slideMenu';
        this.className = 'Delta';
        this.innerHTML = '<a href="./index.html">Home</a><a href="./catalogue.html">Catalogue</a> <div>Sales</div> <div>Stock</div>';
    }
} customElements.define("slide-menu", SlideMenu);

class BlockFind extends HTMLElement {
    connectedCallback() {
        this.id = 'blockFind';
        this.className = 'Delta';
        this.innerHTML = '<div id="search">Search</div><div id="comets">☄</div>';
    }
} customElements.define("block-find", BlockFind);

class BoardVosk extends HTMLElement {
    connectedCallback() {
        this.id = 'boardVosk';
        this.className = 'Delta';
        this.innerHTML = ddddss;
    }
} customElements.define("board-vosk", BoardVosk);

class DeltaFoot extends HTMLElement {
    connectedCallback() {
        this.id = 'deltaFoot';
        this.className = 'Delta';
        this.innerHTML = '<div>◯</div><div>⎙</div><div>⌘</div><div>…</div>';
    }
} customElements.define("delta-foot", DeltaFoot);

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

function jjjk() {
    document.getElementById("search").append(ffflld);
}

function qwerty() {
    const alphabets = document.getElementById("alphabet");
    if (alphabets.style.display === 'grid') {
        alphabets.style.display = 'none';
    } else {
        alphabets.style.display = 'grid';
    }
}