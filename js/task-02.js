const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient=>{
const itemList = document.createElement("li")
itemList.textContent = ingredient;
itemList.classList.add("item")
const list = document.querySelector("#ingredients");
list.append(itemList);

});