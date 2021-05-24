const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredient = ingredients.map((element) => {
    const liEl = document.createElement('li');
    liEl.textContent = element;
    return liEl
})

const ulRef = document.querySelector('#ingredients')
ulRef.append(...ingredient)

console.log(ingredient)