const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const itemEl = ingredients.map((el) => {
  const ingredientsItemsEl = document.createElement('li');
  ingredientsItemsEl.classList.add('item');
  ingredientsItemsEl.textContent = el;

  return ingredientsItemsEl;
});
ingredientsEl.append(...itemEl);
