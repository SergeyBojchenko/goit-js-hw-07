const counter = {
    value: 0,
    step: 1,
    onTargetBtnDecrementClick() {
        this.value -= this.step
    },
    onTargetBtnIncrementClick() {
        this.value += this.step
    },
};

const decrementBtnRef = document.querySelector('#counter button[data-action="decrement"]');
console.log(decrementBtnRef);

const incrementBtnRef = document.querySelector('#counter button[data-action="increment"]');
console.log(incrementBtnRef);

const valueRef = document.querySelector('#value');

const updateValueUI = function () {
    valueRef.textContent = counter.value;
};

decrementBtnRef.addEventListener('click', function () {
    counter.onTargetBtnDecrementClick();
    updateValueUI();
});

incrementBtnRef.addEventListener('click', function () {
    counter.onTargetBtnIncrementClick();
    updateValueUI();
});


