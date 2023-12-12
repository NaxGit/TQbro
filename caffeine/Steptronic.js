/* δ Delta components [Steptronic.js] */

const VOSK = document.createElement("div"); VOSK.id="VOSK";
VOSK.innerHTML = 
`
<div id="Board">
<div class="OSK">Q</div><div class="OSK">W</div><div class="OSK">E</div><div class="OSK">R</div><div class="OSK">T</div><div class="OSK">Y</div><div class="OSK">U</div><div class="OSK">I</div><div class="OSK">O</div><div class="OSK">P</div>
<div>&nbsp;</div><div class="OSK">A</div><div class="OSK">S</div><div class="OSK">D</div><div class="OSK">F</div><div class="OSK">G</div><div class="OSK">H</div><div class="OSK">J</div><div class="OSK">K</div><div class="OSK">L</div><div>&nbsp;</div>
<div class="OSK">↑</div><div class="OSK">Z</div><div class="OSK">X</div><div class="OSK">C</div><div class="OSK">V</div><div class="OSK">B</div><div class="OSK">N</div><div class="OSK">M</div><div class="OSK">←</div>
<div class="OSK">123</div><div class="OSK">_</div><div class="OSK">OK ✓</div>
</div>
`;


      
class DeltaHead extends HTMLElement {connectedCallback()
{
const icon = document.createElement("div"); icon.textContent = "⊤⌕";
const find = document.createElement("div"); find.textContent = "Search"; find.id = "finder";
const menu = document.createElement("div"); menu.textContent = '☰';


find.onclick = function(){console.log("hurstds"); document.getElementById("VOSK-SPACER").append(VOSK);};

menu.onclick = function(){ opener(); };


this.append(icon, find, menu);
};}; customElements.define( "delta-head", DeltaHead );


class DeltaFoot extends HTMLElement {connectedCallback()
{
const home = document.createElement('div'); home.textContent = "◯";
const bill = document.createElement('div'); bill.textContent = "⎙";
const fafa = document.createElement('div'); fafa.textContent = "⌘";
const dada = document.createElement('div'); dada.textContent = "…";
this.append(home, bill, fafa, dada);};}; customElements.define( "delta-foot", DeltaFoot );

    
    
    class SearchBar extends HTMLElement {connectedCallback()
    {this.id = "searchbar";
    const look = document.createElement("input");
          look.id = "look";
          look.setAttribute("onkeyup", "vlookup()");
          look.setAttribute("placeholder", "🔍 Search...");
    
    // let item = document.createElement("input"); item.id = "item"; item.setAttribute("type", "text"); item.setAttribute("value", i.Item);
                this.append(look);
                };};
                customElements.define( "search-bar", SearchBar );
          
          {/* <input type="text" id="look" class="switch" onkeyup="vlookup()" placeholder="🔍 Search..."></input> */}
    
    
    class DeltaMenu extends HTMLElement{
    connectedCallback()
    {this.id = "deltamenu";
    
    const home = document.createElement("div"); home.setAttribute("onclick", "home()");
          home.innerHTML = `<div class="xaxis"><svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
    </svg></div><div class="yaxis">Home</div>`;
    
    const catalogue = document.createElement("div"); catalogue.setAttribute("onclick", "catalogue()");
          catalogue.innerHTML = `<div class="xaxis"><svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z"></path>
    </svg></div><div class="yaxis">Catalogue</div>`;
    
    const Dreport = document.createElement("div"); Dreport.setAttribute("onclick", "Dreport()");
          Dreport.innerHTML = `<div class="xaxis"><svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146"></path>
    </svg></div><div class="yaxis">Statement</div>`; Dreport.id = 'DeltaH';

    const Stasrepo = document.createElement("div"); Stasrepo.setAttribute("onclick", "Stasrepo()");
          Stasrepo.innerHTML = `<div class="xaxis"><svg class="svg-icon" viewBox="0 0 20 20">
          <path d="M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z"></path>
    </svg></div><div class="yaxis">Stock report</div>`; Stasrepo.id = 'DeltaH';
    
    // const Wreport = document.createElement("div"); Wreport.setAttribute("onclick", "Wreport()");
    //       Wreport.innerHTML = `<div class="xaxis">
    // <svg class="svg-icon" viewBox="0 0 20 20">
    // <path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>
    // </svg>
    // </div><div class="yaxis">weekly Report</div>`;
    
    // const Mreport = document.createElement("div"); Mreport.setAttribute("onclick", "Mreport()");
    //       Mreport.innerHTML = `<div class="xaxis">⚟</div><div class="yaxis">monthly Report</div>`;
    
    // const settings = document.createElement("div");
    //       settings.innerHTML = `<div class="xaxis">
    // <svg class="svg-icon" viewBox="0 0 20 20">
    // <path d="M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z"></path>
    // </svg>
    // </div><div class="yaxis">Settings</div>`;
    
    this.append(home, catalogue, Dreport, Stasrepo);
    
    // this.innerHTML = `
    // <a href="./gamma/catalogue.html">Cat6</a>
    // <a href="./gamma/zumTestData.html">TestData</a>
    // <a href="./gamma/alpha.html">Icons</a>
    // <a href="./gamma/rePo.html">Report</a>
    // <a href="#news">News</a><a href="#contact">Contact</a>
    // <a href="#" onclick="siftChange()">Start New Page</a>`;
    
    };}; customElements.define( "delta-menu", DeltaMenu );
    
    function SSD()
    {
          let searchbar = document.getElementById("searchbar");
          let deltamenu = document.getElementById("deltamenu");
          
          if (deltamenu.style.display === "block")
          {
                deltamenu.style.display = "none";
                searchbar.style.display = "block";
          }
          else
          {
                deltamenu.style.display = "block";
                searchbar.style.display = "none";
          }
    };
    
    function home() {location.href = "./index.html";};
    function catalogue() {location.href = "./catalogue.html";};
    function Dreport() {location.href = "./sales_d.html";};
    function Wreport() {location.href = "./repo/ZCiweekly.html";};
    function Mreport() {location.href = "./repo/ZCimonthly.html";};
    function Stasrepo() {location.href = "./DashCam.html";};
    
    
    
    // const button = document.querySelector("button");
    
    // button.addEventListener("click", (event) => {
    //   button.textContent = `Click count: ${event.detail}`;
    // });
    
    // let trays = document.getElementById("tray");
    // tab.addEventListener('click', (e) =>
    //   {
    //     // Retrieve id from clicked element
    //     let elementId = e.target.id;
    //     // If element has id
    //     if (elementId !== '') {
    //         console.log(elementId);
    //     }
    //     // If element has no id
    //     else { 
    //         console.log("An element without an id was clicked.");
    //     }
    //   }
    // );
    
    
    
    
    
    
    
    
    
    function vlookup() {
          // Declare variables
          var input, filter, tr, td, te, i, txtValue;
          input = document.getElementById("look");
          filter = input.value.toUpperCase();
          tr = document.getElementsByClassName("nickName");
          te = document.getElementsByClassName("edgeIcon");
    
        
          // Loop through all table rows, and hide those who don't match the search query
          for (i = 0; i < tr.length; i++) {
                td = tr[i];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                te[i].style.display = "";
              } else {
                te[i].style.display = "none";
              }
            }
          }
        }