// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его
//  содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили 
// в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const textInput = document.querySelector('#validation-input');
const validDataLength = Number(textInput.getAttribute('data-length')); 
// якщо не приводити значення validDataLength до числовго типу, то можна в 44 рядку, 
// під час перевірки, використати несувору рівнисть '=='

textInput.addEventListener('blur', onInputBlurValidation);

function onInputBlurValidation(event) {
    // console.log(validDataLength);
    // console.log(typeof (validDataLength));

    // console.log(event.currentTarget.value.length);  
    // console.log(typeof (event.currentTarget.value.length));
    
    if (event.currentTarget.value.length === validDataLength ) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
    else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
};