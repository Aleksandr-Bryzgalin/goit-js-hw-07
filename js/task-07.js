const inputFontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')

inputFontSizeControlRef.addEventListener('input', onInputFontSizeChange);

function onInputFontSizeChange(event) {
    const changeSize = event.currentTarget.value;
    return textRef.style.fontSize = `${changeSize}px`;
}