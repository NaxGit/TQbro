const Board = document.getElementById("VOSK-SPACER");

Board.addEventListener
(
    "click", (c) =>
    {
        if (c.target.classList.contains("OSK"))
        {
            let Being = document.getElementById("finder").textContent;
            
            if (Being === "Search") {document.getElementById("finder").textContent = "";}
            
            let stroke = c.target.textContent;
            document.getElementById("finder").textContent += stroke; console.log("dsa");
        }
    }
);