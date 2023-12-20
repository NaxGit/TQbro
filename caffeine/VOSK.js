const Board = document.getElementById("keyBoards");

Board.addEventListener
(
    "click", (c) =>
    {
        if (c.target.classList.contains("OSK"))
        {
            // let Being = document.getElementById("finder").textContent;
            
            if (Being === "Search") {document.getElementById("finder").textContent = "";}
            
            let stroke = c.target.textContent;
            // document.getElementById("finder").textContent += stroke; console.log("dsa");
        }
    }
);

// const VOSK = document.createElement("div"); VOSK.id="VOSK";
// VOSK.innerHTML = 
// `
// <div id="Board">
// <div class="OSK">Q</div><div class="OSK">W</div><div class="OSK">E</div><div class="OSK">R</div><div class="OSK">T</div><div class="OSK">Y</div><div class="OSK">U</div><div class="OSK">I</div><div class="OSK">O</div><div class="OSK">P</div>
// <div>&nbsp;</div><div class="OSK">A</div><div class="OSK">S</div><div class="OSK">D</div><div class="OSK">F</div><div class="OSK">G</div><div class="OSK">H</div><div class="OSK">J</div><div class="OSK">K</div><div class="OSK">L</div><div>&nbsp;</div>
// <div class="OSK">↑</div><div class="OSK">Z</div><div class="OSK">X</div><div class="OSK">C</div><div class="OSK">V</div><div class="OSK">B</div><div class="OSK">N</div><div class="OSK">M</div><div class="OSK">←</div>
// <div class="OSK">123</div><div class="OSK">_</div><div class="OSK">OK ✓</div>
// </div>
// `;