// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит 
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// -Размеры самого первого <div> - 30px на 30px.
// -Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// -Все элементы должны иметь случайный цвет фона в формате HEX.Используй готовую 
// функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым 
// удаляя все созданные элементы.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const collection = document.querySelector('#boxes');


createBtn.addEventListener('click', inputValue);
destroyBtn.addEventListener('click', destroyBoxes);

function inputValue() {
  createBoxes(input.value);
}

function createBoxes(amount) {
  let size = 30;

  for (let i = 1; i <= amount; i += 1) {
    const newEl = document.createElement('div');
    size += 10;
    newEl.style.width = `${size}px`;
    newEl.style.height = `${size}px`;
    newEl.style.marginBottom = '5px';
    newEl.style.backgroundColor = getRandomHexColor();
  
    collection.append(newEl);

  };
};

function destroyBoxes() {
  collection.innerHTML = '';
}

