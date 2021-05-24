
const counterValue = {
    value: 0,

    increment () {
        this.value += 1;
    },

    decriment() {
        this.value -= 1
    },
}



const valueRef = document.querySelector('#value')
const btnDecrRef = document.querySelector('#counter button[data-action="decrement"]')
const btnIncrRef = document.querySelector('#counter button[data-action="increment"]')




btnDecrRef.addEventListener('click', function () {
    counterValue.decriment()
    valueRef.textContent = counterValue.value
})

btnIncrRef.addEventListener('click', function () {
    counterValue.increment()
    valueRef.textContent = counterValue.value
})

