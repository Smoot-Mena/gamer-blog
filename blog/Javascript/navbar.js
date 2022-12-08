/*=======================
  Global Variable Setup
=======================*/

const navigationBar = document.getElementById("navigationBar");
const navigationList = document.getElementById("navigationList");
const consoles = document.getElementsByClassName("console");
// let listItem = document.createElement("li");
// let link = document.createElement("a");


/*=======================
   Dynamic Navigation
=======================*/

/**@desc - This function is for dynamically populating the 
 * navigation bar with the consoles as links. The links
 * connect to the corresponding console's page.
 * */

function navigationOrNah () {
    let filteredConsoles = [...new Set(consoles)];
    for(let console of filteredConsoles){
        // let consoleName = console.title;
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        let consoleName = console.getAttribute("title").toString();
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