// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// 1 - Обработка отправки формы form.login-form должна быть по событию submit.
// 2 - При отправке формы страница не должна перезагружаться.
// 3 - Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// 4 - Если пользователь заполнил все поля и отправил форму, собери значения полей в
//     обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
// 5 - Для доступа к элементам формы используй свойство elements.
// 6 - Выведи обьект с введенными данными в консоль и очисти значения полей формы методом
//     reset.

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // вимикаємо автоматичне перезавантаення сторінки після відправки форми
    const email = event.currentTarget.elements.email.value;
    // console.log(email);
    const password = event.currentTarget.elements.password.value;
    // console.log(password);

    if (email === '' || password === '') {
        alert('Please, fill all fields!')
       // якщо хоча б одне з полів вводу порожнє, виводимо попередження

    } else {
        const formData = {
            email,
            password
        }
        // якщо обидва поля заповнені створюємо об'єкт із введених данних

        console.log(formData);
        formEl.reset();
    }
}