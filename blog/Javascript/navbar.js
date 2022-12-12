/*=======================
  Global Variable Setup
=======================*/

const navigationList = document.getElementById("navigationList");
const consoles = document.getElementsByClassName("console");



/*=================
  Filter Function
=================*/

/**@desc - This function is for filtering the list
 * of consoles that are mentioned on the home page
 * so that the list doesn't have repeats.*/



/*=======================
   Dynamic Navigation
=======================*/

/**@desc - This function is for dynamically populating the 
 * navigation bar with the consoles as links. The links
 * connect to the corresponding console's page.
 * */

function navigationOrNah () {
  let filteredConsoles = [...new Set(consoles)];
  // let consoleArray = Object.values(consoles);
  // let filteredConsoles = [...new Set(Object.values(consoles))];
  for (let console of filteredConsoles) {
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    let consoleName = console.getAttribute("title").toString();
    // if (console.getAttribute("title")) {};
    link.href = `${consoleName}.html`;
    link.textContent = consoleName;
    listItem.className = `${consoleName}-link`;
    listItem.appendChild(link);
    navigationList.appendChild(listItem);
  };
}

// Calling the navigation bar function
navigationOrNah();

// ============== End of File! ==================