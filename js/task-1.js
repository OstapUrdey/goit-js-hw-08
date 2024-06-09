const categories = document.querySelector('#categories');

const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
const categoryTitle = item.querySelector('.subtitle').textContent;

const categoryItems = item.querySelectorAll('.list .list-item');

console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${categoryItems.length}`);
});