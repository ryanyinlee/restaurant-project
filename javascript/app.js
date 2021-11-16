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

// This function accepts the submit form and puts it into local storage 
function clickSave(event) {
    var itemName = getElementById('itemName');
    var itemDescription = getElementById('itemDescription');
    var itemPrice = getElementById('itemPrice');
    
    new MenuObject(itemName, itemDescription, itemPrice);
    }


// Event listener submit.
function checkForSubmit() {
    const clickLocation = document.getElementById('menuSubmit');
    clickLocation.addEventListener('submit', clickSave);
    

}



// localStorage for new input. Stringifies it.
function storeMenu() {

    const menuJSON = JSON.stringify(MenuObject.all);
    localStorage.setItem('menuSave', menuJSON);

}
// Summon from local storage and parse it back into an object.
function recreateMenu() {

    const menuJSONRetrieve = localStorage.getItem('menuSave');

    if (menuJSONRetrieve) {
        let oldMenu = JSON.parse(menuJSONRetrieve);

        for (let i = 0; i < oldMenu.length; i += 1) {
            oldMenu = oldMenu[i];
            const reinstantiate = new MenuObject(oldMenu.name, oldMenu.description, oldMenu.price);
            reinstantiate.name = oldMenu.name;
            reinstantiate.description = oldMenu.description;
            reinstantiate.price = oldMenu.price;

        }
    }
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

//Test menu item
new MenuObject('French Fried Toast', 'avec queso con huevos', 12);



// Starting Functions
checkForSubmit();
// Renders the chart.
renderList();
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