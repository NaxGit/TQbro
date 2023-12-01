// synapses
// Synapses
// SYNAPSES
// A Minute Gap Across Which impulses Pass By.

let mylatesttap;

function perceive()
{
let now = new Date().getTime();
let timesince = now - mylatesttap;

if ((timesince < 600) && (timesince > 0)) {

    // double tap   
    console.log("fff");
    Confirmation();

  } else {
    // too much time to be a doubletap
  }

  mylatesttap = new Date().getTime();

}




// dddd.addEventListener("touchstart", () => { land = Date.now(); visulas(); });
// dddd.addEventListener("touchend" ,  () => { lift = Date.now(); eclipse(i, tagOS, shift); });

// let magma = document.getElementById("tray");

// magma.addEventListener("touchstart", (event) =>
// {
// if (event.target.classList.contains("TrayImge"))
// {
// let text = event.target; text.classList.add("TrayImgeTap");
// }});

// magma.addEventListener("touchend", (event) =>
// {
// if (event.target.classList.contains("TrayImge"))
// {
// let text = event.target; text.classList.remove("TrayImgeTap");
// }});



// -----------------------------------------------------------



function detectDoubleTapClosure() {
  let lastTap = 0;
  let timeout;
  return function detectDoubleTap(event) {
    const curTime = new Date().getTime();
    const tapLen = curTime - lastTap;
    if (tapLen < 500 && tapLen > 0) {
      console.log('Double tapped!');
      event.preventDefault();
    } else {
      timeout = setTimeout(() => {
        clearTimeout(timeout);
      }, 500);
    }
    lastTap = curTime;
  };
}


document.getElementById("iJava").onclick = function (e) {
let PARENT = e.target.parentNode.id;


console.log(PARENT);

}





/* Regex test to determine if user is on mobile */
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     document.body.addEventListener('touchend', detectDoubleTapClosure(), { passive: false });
// }