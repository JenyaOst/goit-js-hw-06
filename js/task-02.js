const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => { 
const itemList = document.createElement("li");
itemList.textContent = ingredient;
itemList.classList.add("item");
return itemList;
});
list.append(...markup);