// const category = document.querySelector( "#categories" );
// const lala = category.querySelectorAll("ul");
// console.log("Number of categories:", lala.length);

const listOfCategory = document.querySelectorAll( ".item" );
console.log(`Number of categories: ${listOfCategory.length}`);

listOfCategory.forEach(item => {
console.log(`Category: ${item.firstElementChild.textContent}`)
console.log(`Elements: ${item.lastElementChild.children.length}`)
})