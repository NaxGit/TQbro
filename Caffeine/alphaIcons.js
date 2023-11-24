const icons = document.getElementById("Menu");

function alphaIcons(iconData) {
    iconData.forEach(
        (i) => {

            let url = "./zo_ingredients/holder".replace("holder", i.Iconi);

            let edge = document.createElement('div');
                edge.classList.add('media', 'glass');
                // edge.onclick = function () { alphaTrays(i); };

            let icon = document.createElement('img');
                icon.classList.add('thumb', 'glass');
                icon.src = url;

            let name = document.createElement('div');
                name.classList.add('detai', 'fff');
            name.textContent = i.iName;

            edge.append(icon, name);
            icons.append(edge);
        }
    );
}

function myFunction() {
    input = document.getElementById("Qfind");
    filter = input.value.toUpperCase();
  table = document.getElementById("Menu");
  tr = table.getElementsByClassName("media");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}