const totalEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalEl.length}`);

const categoryArray = [...totalEl].map(categories => `Category: ${categories.children[0].textContent} 
Elements: ${categories.children[1].children.length}`).join('\n');

console.log(categoryArray);
