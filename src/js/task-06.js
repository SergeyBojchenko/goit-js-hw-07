const validationInputRef = document.querySelector('#validation-input');
const minLengthWord = validationInputRef.dataset.length;

validationInputRef.addEventListener('blur', onLossOfFocus);

function onLossOfFocus(event) {
    console.dir(event.currentTarget.value.length);
    if (event.currentTarget.value.length < minLengthWord) {
        validationInputRef.classList='invalid';
    } else {
        validationInputRef.classList='valid';
    };
};