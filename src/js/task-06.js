const refs = {
    validationInputRef: document.querySelector('#validation-input'),
    minLengthWord: 6,
};
console.log(refs.validationInputRef);
refs.validationInputRef.addEventListener('blur', onLossOfFocus);

function onLossOfFocus(event) {
    console.dir(event.currentTarget.value.length);
    if (event.currentTarget.value.length < refs.minLengthWord) {
        refs.validationInputRef.classList.add('invalid');
    } else {
        refs.validationInputRef.classList.add('valid');
        refs.validationInputRef.classList.remove('invalid')
    };
};