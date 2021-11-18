'use strict';

// Object constructor for regular menu items.
function MenuObject(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    MenuObject.all.push(this); // Store it.
}

// Array stores menu objects.
MenuObject.all = [];


// This function accepts the submit form and puts it into the string
function clickSave(event) {
    event.preventDefault();
    console.log('button were pushed');
    var itemName = document.getElementById('itemName').value;
    var itemDescription = document.getElementById('itemDescription').value;
    var itemPrice = document.getElementById('itemPrice').value;

    new MenuObject(itemName, itemDescription, itemPrice);
    console.log(MenuObject.all);

    clearTemp(); // Clears the preview to add the new items.
    renderList(); // Renders that list again.

    console.log(localStorage);

    document.forms['menuSubmit'].reset(); // Clears the form for new entry.
    

}

// Remove all of the rows (tr) in the cart table (tbody). Clears it out to be refilled.
function clearTemp() {
    const tbodyElem = document.getElementById('menuAdd');
    while (tbodyElem.firstChild) {
        tbodyElem.removeChild(tbodyElem.firstChild);
    }
}


function deleteStorage() {

    //confirm('Would you like to remove the additional menu items?');
    if (confirm('Would you like to remove the additional menu items?') === true) {
        localStorage.clear();
        alert('Additional menu items deleted.');
    } else {
        alert('Nothing was removed.');
    }
    
    
} 

// localStorage for new input. Stringifies it.
function storeMenu() {

    const menuJSON = JSON.stringify(MenuObject.all);
    localStorage.setItem('menuSave', menuJSON);

}
// Summon from local storage and parse it back into an object.
function loadMenu(event) {
    event.preventDefault();
    
    loadFromSave(); 
    clearTemp();// Clears the preview to add the new items.
    renderList();// Renders that list again.
    

}

function loadFromSave() {
    const menuItems = JSON.parse(localStorage.getItem('menuSave')); 
    if (menuItems) {
        
        for (let i = 0; i < menuItems.length; i += 1) {
            new MenuObject(menuItems[i].name, menuItems[i].description, menuItems[i].price);
        }
    }
    else {
        alert('No specials currently. Check back later!');
    }
    renderList();
}

// Button to activate the save function separately.
function saveMenu(event) {

    if (confirm('Would you like to SAVE the additional menu items?') === true) {
        storeMenu();
        alert('Additional menu items SAVED.');
    } else {
        alert('Nothing was saved.');
    }
    
    

}





// This function renders the results list in the HTML.
// MenuObject
function renderList() {

    const ulElem = document.getElementById('menuAdd');

    for (let i = 0; i < MenuObject.all.length; i += 1) {
        const menuAdd = MenuObject.all[i];

        const liElemName = document.createElement('h4');
        ulElem.appendChild(liElemName);
        liElemName.textContent = "  " + menuAdd.name + "  " + menuAdd.price;

        const liElemDesc = document.createElement('p');
        ulElem.appendChild(liElemDesc);
        liElemDesc.textContent = "  " + menuAdd.description;

        const brElemDesc = document.createElement('br');
        ulElem.appendChild(brElemDesc);
        
    }
}

// Method to remove one item from the menu array.
MenuObject.prototype.removeItem = function (itemIndex) {
    MenuObject.all.splice(itemIndex, 1);
}


// === BUTTON CLICKS BELOW ===
// Event listener submit.
function checkForSubmit() {
    const clickLocation = document.getElementById('menuSubmitButton');
    clickLocation.addEventListener('click', clickSave);
}

function checkForSave() {
    const saveLocation = document.getElementById('saveMenuButton');
    saveLocation.addEventListener('click', saveMenu);
}

function recreateButton() {
    const recreateLocation = document.getElementById('recreateMenuButton');
    recreateLocation.addEventListener('click', loadMenu);
}

function checkForDelete() {
    const removeLocation = document.getElementById('removeMenuButton');
    removeLocation.addEventListener('click', deleteStorage);
}

// === BUTTON CLICKS ABOVE ===







//Test menu item
//new MenuObject('French Fried Toast', 'avec queso con huevos', 12);
// renderList();


// Starting Functions

checkForSubmit();
checkForSave();
recreateButton();
checkForDelete();
// Renders the chart.



// Code Storage Below ==============================================================================


// Object constructor for specials.
// MAKE SURE REGULAR WORKS FIRST
function MenuObjectSpecial(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    MenuObjectSpecial.all.push(this);
}



// Render function, gets filepath and name.
MenuObject.prototype.render = function (side) {
    const textElem = document.getElementById('menuAdd');


}

