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
    storeMenu();

}



// Event listener submit.
function checkForSubmit() {
    const clickLocation = document.getElementById('menuSubmitButton');
    clickLocation.addEventListener('click', clickSave);

}

// Remove all of the rows (tr) in the cart table (tbody). Clears it out to be refilled.
function clearTemp() {
    const tbodyElem = document.getElementById('menuAdd');
    while (tbodyElem.firstChild) {
        tbodyElem.removeChild(tbodyElem.firstChild);
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
    console.log('this recreate button were pushed');
    
    const menuItems = JSON.parse(localStorage.getItem('menuSave')); // || []
    console.log('menuItems: ' + menuItems);
    console.log(menuItems[0]);
    
    for (let i = 0; i < menuItems.length; i += 1) {
        new MenuObject(menuItems[i].name, menuItems[i].description, menuItems[i].price);
    }

    
     
    clearTemp(); // Clears the preview to add the new items.
    renderList(); // Renders that list again.


}



// This function renders the results list in the HTML.
// MenuObject
function renderList() {

    const ulElem = document.getElementById('menuAdd');

    for (let i = 0; i < MenuObject.all.length; i += 1) {
        const menuAdd = MenuObject.all[i];

        const liElemName = document.createElement('li');
        ulElem.appendChild(liElemName);
        liElemName.textContent = "  " + menuAdd.name + "  " + menuAdd.price;

        const liElemDesc = document.createElement('li');
        ulElem.appendChild(liElemDesc);
        liElemDesc.textContent = "  " + menuAdd.description;
    }


}


// Method to remove one item from the menu array.
MenuObject.prototype.removeItem = function (itemIndex) {

    MenuObject.all.splice(itemIndex, 1);
}


function recreateButton() {

    const recreateLocation = document.getElementById('recreateMenuButton');
    recreateLocation.addEventListener('click', loadMenu);

}






//Test menu item
//new MenuObject('French Fried Toast', 'avec queso con huevos', 12);
// renderList();


// Starting Functions

checkForSubmit();
recreateButton();
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

