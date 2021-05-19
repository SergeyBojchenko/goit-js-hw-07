const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients')

const ingredientsItems = ingredients.map((item) => {
  const liEl = document.createElement('li');
  liEl.textContent = item;
  
  return liEl;
})

ingredientsRef.append(...ingredientsItems)

console.log(ingredientsItems)
