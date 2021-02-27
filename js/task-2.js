const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createEl = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});

const ulListEl = document.querySelector("#ingredients");
ulListEl.append(...createEl);
console.log(ulListEl);