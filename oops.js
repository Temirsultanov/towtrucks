(function(){
    // Нахожу все кнопки, нахожу главный блок и блок с надписью "Упс. Если кликнули на кнопку, то скрываю наш блок и добавляю блок "Упс"
    let buttons = document.querySelectorAll('.oops__button');
    let oops = document.querySelector('.oops__wrap');
    let order = document.querySelector('.order__content');
    let onButtonClick = function () {
        oops.classList.remove('dn');
        order.classList.add('dn');
    }
    buttons.forEach(button => {
        button.addEventListener('click', onButtonClick);
    });
})()