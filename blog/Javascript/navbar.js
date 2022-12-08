/*=======================
  Global Variable Setup
=======================*/

let navBar = document.getElementById("navigationBar");
let navList = document.getElementById("navigationList");
let consoles = document.getElementsByClassName("console");

/*=======================
   Dynamic Navigation
=======================*/

/**@desc - This function is for dynamically populating the 
 * navigation bar with the consoles as links. The links
 * connect to the corresponding console's page.
 * */

function navigationOrNah () {
    for(let console in consoles){
        let consoleName = console.title;
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        // let consoleName = console.getAttribute("title");
        link.href = `${consoleName}.html`;
        link.textContent = consoleName;
        listItem.className = `${consoleName}-link`;
    };
    listItem.appendChild(link);
    navList.appendChild(listItem);
}

// Calling the navigation bar function
navigationOrNah();

// ============== End of File! ==================