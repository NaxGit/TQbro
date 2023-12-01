// CAZIO.fn > qwerty Virtual Keyboard

let selekta;

const n1 = document.createElement('div'); n1.textContent = 1; n1.onclick = function(){CAZIO(1)};
const n2 = document.createElement('div'); n2.textContent = 2; n2.onclick = function(){CAZIO(2)};
const n3 = document.createElement('div'); n3.textContent = 3; n3.onclick = function(){CAZIO(3)};
const n4 = document.createElement('div'); n4.textContent = 4; n4.onclick = function(){CAZIO(4)};
const n5 = document.createElement('div'); n5.textContent = 5; n5.onclick = function(){CAZIO(5)};
const n6 = document.createElement('div'); n6.textContent = 6; n6.onclick = function(){CAZIO(6)};
const n7 = document.createElement('div'); n7.textContent = 7; n7.onclick = function(){CAZIO(7)};
const n8 = document.createElement('div'); n8.textContent = 8; n8.onclick = function(){CAZIO(8)};
const n9 = document.createElement('div'); n9.textContent = 9; n9.onclick = function(){CAZIO(9)};
const n0 = document.createElement('div'); n0.textContent = 0; n0.onclick = function(){CAZIO(0)};

let glyph = ["text1", "tex2", "text3", "text4"];

glyph.forEach(function(Num) {
    let div = document.createElement("div");
    div.className = "finalBlock";
    div.innerHTML = el;
    document.body.appendChild(div);
});

const Cl = document.createElement('div'); Cl.textContent = "C"; Cl.onclick = function(){CAZIO("C")};

const VK = document.createElement('div'); VK.id = "qwertyVK"; VK.append(n1, n2, n3, n4, n5, n6, n7, n8, n9, n0, Cl);
// append "VK" to any cancelIdleCallback.

function CAZIO(n)
{

    let holders = document.getElementById("cost");
    let analogi = holders.textContent;

    switch(n)
    {
        case 1: ADLIV(analogi += 1); break;
        case 2: ADLIV(analogi += 2); break;
        case 3: ADLIV(analogi += 3); break;
        case 4: ADLIV(analogi += 4); break;
        case 5: ADLIV(analogi += 5); break;
        case 6: ADLIV(analogi += 6); break;
        case 7: ADLIV(analogi += 7); break;
        case 8: ADLIV(analogi += 8); break;
        case 9: ADLIV(analogi += 9); break;
        case 0: ADLIV(analogi += 0); break;

        case "C": ADLIV(analogi = 0); break;

    default: // code block
    }
};


function ADLIV(nn) {
    let userio = Number(nn);
    let holders = document.getElementById("cost");
    holders.innerHTML = userio;
    // newf = IO;
    // console.log(newf);
    // holders.textContent = newf;

    // holders.append(analogi);
}

// /* qwerty Virtual Keyboard */
// #qwertyVK {
//     color: #DCDCDC;
//     display: grid;
//     gap: 0.5em;
//     grid-template-columns: repeat(3, 1fr);
//   }
//   #qwertyVK > div{
//     aspect-ratio: 1/0.618;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: 1px solid cadetblue;
//     border-radius: 0.5em;
//   }
//   /* ....................... */


/* qwerty Virtual Keyboard */

// #qwertyVK {
//   color: #DCDCDC;
//   display: grid;
//   gap: 0.5em;
//   grid-template-columns: repeat(3, 1fr);
// }

// #qwertyVK > div{
//   aspect-ratio: 1/0.618;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid cadetblue;
//   border-radius: 0.5em;
// }

/* ....................... */