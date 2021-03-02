(function(){
    // Нахожу все кнопки, нахожу главный блок и блок с надписью "Упс. Если кликнули на кнопку, то скрываю наш блок и добавляю блок "Упс"
    let buttons = document.querySelectorAll('.phoneinput__button');
    let phoneinput = document.querySelector('.phoneinput__wrap');
    let order = document.querySelector('.order__content');
    let onButtonClick = function () {
        phoneinput.classList.remove('dn');
        order.classList.add('dn');
        window.fromaddress = document.querySelector('#from').value;
        window.whereaddress = document.querySelector('#where').value;
        document.querySelector('.fromaddress').querySelector('.h4').textContent = window.fromaddress;
        document.querySelector('.whereaddress').querySelector('.h4').textContent = window.whereaddress;
        document.querySelector('.info__price').textContent = window.totalcost + '₽';
    }
    buttons.forEach(button => {
        button.addEventListener('click', onButtonClick);
    });
})()