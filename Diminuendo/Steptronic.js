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
        this.innerHTML = `
        <div>
            <svg class="svg-icon" viewBox="0 0 20 20"><path d="M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146"></path></svg>
            <div>Sales</div>
            <div id="cometSales"></div>
        </div>
        <div>
            <svg class="svg-icon" viewBox="0 0 20 20"><path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path></svg>
            <div>Faida</div>
            <div id="cometFaida"></div>
        </div>
        <div>
            <svg class="svg-icon" viewBox="0 0 20 20"><path d="M17.638,6.181h-3.844C13.581,4.273,11.963,2.786,10,2.786c-1.962,0-3.581,1.487-3.793,3.395H2.362c-0.233,0-0.424,0.191-0.424,0.424v10.184c0,0.232,0.191,0.424,0.424,0.424h15.276c0.234,0,0.425-0.191,0.425-0.424V6.605C18.062,6.372,17.872,6.181,17.638,6.181 M13.395,9.151c0.234,0,0.425,0.191,0.425,0.424S13.629,10,13.395,10c-0.232,0-0.424-0.191-0.424-0.424S13.162,9.151,13.395,9.151 M10,3.635c1.493,0,2.729,1.109,2.936,2.546H7.064C7.271,4.744,8.506,3.635,10,3.635 M6.605,9.151c0.233,0,0.424,0.191,0.424,0.424S6.838,10,6.605,10c-0.233,0-0.424-0.191-0.424-0.424S6.372,9.151,6.605,9.151 M17.214,16.365H2.786V7.029h3.395v1.347C5.687,8.552,5.332,9.021,5.332,9.575c0,0.703,0.571,1.273,1.273,1.273c0.702,0,1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h5.941v1.347c-0.495,0.176-0.849,0.645-0.849,1.199c0,0.703,0.57,1.273,1.272,1.273s1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h3.395V16.365z"></path></svg>
            <div>Stock</div>
            <div id="cometStock"></div>
        </div>
        <div>
            <svg class="svg-icon" viewBox="0 0 20 20"><path d="M16.469,8.924l-2.414,2.413c-0.156,0.156-0.408,0.156-0.564,0c-0.156-0.155-0.156-0.408,0-0.563l2.414-2.414c1.175-1.175,1.175-3.087,0-4.262c-0.57-0.569-1.326-0.883-2.132-0.883s-1.562,0.313-2.132,0.883L9.227,6.511c-1.175,1.175-1.175,3.087,0,4.263c0.288,0.288,0.624,0.511,0.997,0.662c0.204,0.083,0.303,0.315,0.22,0.52c-0.171,0.422-0.643,0.17-0.52,0.22c-0.473-0.191-0.898-0.474-1.262-0.838c-1.487-1.485-1.487-3.904,0-5.391l2.414-2.413c0.72-0.72,1.678-1.117,2.696-1.117s1.976,0.396,2.696,1.117C17.955,5.02,17.955,7.438,16.469,8.924 M10.076,7.825c-0.205-0.083-0.437,0.016-0.52,0.22c-0.083,0.205,0.016,0.437,0.22,0.52c0.374,0.151,0.709,0.374,0.997,0.662c1.176,1.176,1.176,3.088,0,4.263l-2.414,2.413c-0.569,0.569-1.326,0.883-2.131,0.883s-1.562-0.313-2.132-0.883c-1.175-1.175-1.175-3.087,0-4.262L6.51,9.227c0.156-0.155,0.156-0.408,0-0.564c-0.156-0.156-0.408-0.156-0.564,0l-2.414,2.414c-1.487,1.485-1.487,3.904,0,5.391c0.72,0.72,1.678,1.116,2.696,1.116s1.976-0.396,2.696-1.116l2.414-2.413c1.487-1.486,1.487-3.905,0-5.392C10.974,8.298,10.55,8.017,10.076,7.825"></path></svg>
            <div>info</div>
            <div id="cometTQapp">⊤⌕</div>
        </div>`;
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
        this.innerHTML = `
        <div id="alphabet">
        <div id="1" class="NumLock">1</div>
        <div id="2" class="NumLock">2</div>
        <div id="3" class="NumLock">3</div>
        <div id="4" class="NumLock">4</div>
        <div id="5" class="NumLock">5</div>
        <div id="6" class="NumLock">6</div>
        <div id="7" class="NumLock">7</div>
        <div id="8" class="NumLock">8</div>
        <div id="9" class="NumLock">9</div>
        <div id="0" class="NumLock">0</div>
        <div class="OSK">Q</div>
        <div class="OSK">W</div>
        <div class="OSK">E</div>
        <div class="OSK">R</div>
        <div class="OSK">T</div>
        <div class="OSK">Y</div>
        <div class="OSK">U</div>
        <div class="OSK">I</div>
        <div class="OSK">O</div>
        <div class="OSK">P</div>
        <div>&nbsp;</div>
        <div class="OSK">A</div>
        <div class="OSK">S</div>
        <div class="OSK">D</div>
        <div class="OSK">F</div>
        <div class="OSK">G</div>
        <div class="OSK">H</div>
        <div class="OSK">J</div>
        <div class="OSK">K</div>
        <div class="OSK">L</div>
        <div>&nbsp;</div>
        <div class="OSK">↑</div>
        <div class="OSK">Z</div>
        <div class="OSK">X</div>
        <div class="OSK">C</div>
        <div class="OSK">V</div>
        <div class="OSK">B</div>
        <div class="OSK">N</div>
        <div class="OSK">M</div>
        <div id="C" class="OSK NumLock">←</div>
        <div class="OSK">@</div>
        <div class="OSK">_</div>
        <div id="K" class="OSK NumLock">✓</div>
        </div>`;
    }
} customElements.define("board-vosk", BoardVosk);



class DeltaFoot extends HTMLElement {
    connectedCallback() {
        this.id = 'deltaFoot';
        this.className = 'Delta';
        this.innerHTML = '<div>◯</div><div>⎙</div><div>⌘</div><div>…</div>';
    }
} customElements.define("delta-foot", DeltaFoot);


