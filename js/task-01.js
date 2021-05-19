

const itemRef = document.querySelectorAll('.item');

console.log(`В списке ${itemRef.length} категории.`)

itemRef.forEach(elem => console.log(`Категория ${elem.firstElementChild.textContent}, количество элементов ${elem.querySelectorAll('li').length}`));



