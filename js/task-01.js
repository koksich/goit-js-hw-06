// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);


items.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const elemetsAmount = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}
    Elements: ${elemetsAmount}`);
}
);

