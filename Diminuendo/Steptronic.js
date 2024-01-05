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
        <img src="./Crescendo/bitmap/newspaper.png">
            <div>Sales</div>
            <div id="cometSales"></div>
        </div>
        <div>
        <img src="./Crescendo/bitmap/newspaper-open.png">
            <div>Faida</div>
            <div id="cometFaida"></div>
        </div>
        <div>
        <img src="./Crescendo/bitmap/calendar-clock.png">
            <div>Shift</div>
            <div id="cometShift">Started</div>
        </div>
        <div>
        <img src="./Crescendo/bitmap/process.png">
            <div>⊤⌕</div>
            <div id="cometTQapp">info</div>
        </div>`;
    }
} customElements.define("comet-flow", CometFlow);



class SlideMenu extends HTMLElement {
    connectedCallback() {
        this.id = 'slideMenu';
        this.className = 'Delta';
        this.innerHTML = `
        <a href="./index.html">Home</a>
        <a href="./catalogue.html">Catalogue</a>
        <a href="./reports.html">Reports</a>
        <a href="./shift.html">Shift</a>
        <a href="./sales.html">Sales</a>
	<a href="./stock.html">Stock</a>
        <div>...</div>`;
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
        <div id="C" class="NumLock">←</div>
        <div class="OSK">@</div>
        <div class="OSK">_</div>
        <div id="K" class="NumLock">✓</div>
        </div>`;
    }
} customElements.define("board-vosk", BoardVosk);



class DeltaFoot extends HTMLElement
{
connectedCallback()
{

	this.id = 'deltaFoot';
	this.className = 'Delta';

const Home = document.createElement('div');
	Home.textContent = '◯';
	Home.onclick = function () {location.href = "./index.html";};

const Repo = document.createElement('div');
	Repo.textContent = '⎙';
	Repo.onclick = function () {location.href = "./reports.html";};

const Cats = document.createElement('div');
	Cats.textContent = '⌘';
	Cats.onclick = function () {location.href = "./catalogue.html";};

	this.append(Home, Repo, Cats);

}
}

customElements.define("delta-foot", DeltaFoot);
