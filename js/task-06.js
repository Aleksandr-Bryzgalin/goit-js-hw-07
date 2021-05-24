const inputRef = document.querySelector('#validation-input')
const lengthValue = Number(inputRef.getAttribute('data-length'))

inputRef.addEventListener('blur', onBlur);

function onBlur(event) {
  let lengthOfInput = event.currentTarget.value.length;
  
  if (lengthOfInput === lengthValue) {
    inputRef.classList.remove('invalid');
    return inputRef.classList.add('valid');
  }
  
  inputRef.classList.remove('valid');
  inputRef.classList.add('invalid');
}

