const validationInputRef = document.querySelector('#validation-input');
const minLengthWord = Number(validationInputRef.dataset.length);

validationInputRef.addEventListener('blur', onLossOfFocus);

function onLossOfFocus(event) {
    console.dir(event.currentTarget.value.length);
    if (event.currentTarget.value.length === minLengthWord) {
        validationInputRef.classList = 'valid';
    } else {
        validationInputRef.classList = 'invalid';
     };
};