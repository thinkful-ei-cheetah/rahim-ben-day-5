"use strict";

const STORE = [
  { name: "apples", checked: false },
  { name: "oranges", checked: false },
  { name: "milk", checked: true },
  { name: "bread", checked: false }
];

function renderShoppingList(array) {
  // render the shopping list in the DOM
  console.log("`renderShoppingList` ran");
  const shoppingListItemsString = "<li>apples</li>";
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    let trueOrFalse = array[i].checked ? ".shopping-item__checked" : "";

    newArray.push(
      `<li data-attr=${i} class=${trueOrFalse}>${array[i].name}</li>`
    );
  }

  // insert that HTML into the DOM
  $(".js-shopping-list").html(newArray);
}

function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  console.log("`handleNewItemSubmit` ran");
}

function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on
  // a shopping list item.
  console.log("`handleItemCheckClicked` ran");
}

function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  console.log("`handleDeleteItemClicked` ran");
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList(STORE);
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);
