/*=======================
  Global Variable Setup
=======================*/

const navigationList = document.getElementById("navigationList");
const consoles = document.getElementsByClassName("console");


/*=======================
   Dynamic Navigation
=======================*/

/**@desc - This function is for dynamically populating the 
 * navigation bar with the consoles as links. The links
 * connect to the corresponding console's page.
 * */

function navigationForTheWin () {
  let filteredConsoles = [...new Set(consoles)];
  for (let console of filteredConsoles) {
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    let consoleName = console.getAttribute("title").toString();
    link.href = `../${consoleName}.html`;
    link.textContent = consoleName;
    listItem.className = `${consoleName}-link`;
    listItem.appendChild(link);
    navigationList.appendChild(listItem);
  };
}

// Calling the navigation bar function
navigationForTheWin();

// ============== End of File! ==================