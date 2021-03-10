(function(){
    // Нахожу все кнопки, нахожу главный блок и блок с надписью "Упс. Если кликнули на кнопку, то скрываю наш блок и добавляю блок "Упс"
    let buttons = document.querySelectorAll('.phoneinput__button');
    let phoneinput = document.querySelector('.phoneinput__wrap');
    let order = document.querySelector('.order__content');
    let from = document.querySelector('#from');
    let where = document.querySelector('#where');
    let onButtonClick = function () {
        if (from.value && where.value) {
            where.classList.remove('invalid');
            from.classList.remove('invalid');
            phoneinput.classList.remove('dn');
            order.classList.add('dn');
            window.fromaddress = from.value;
            window.whereaddress = where.value;
            document.querySelector('.fromaddress').querySelector('.h4').textContent = window.fromaddress;
            document.querySelector('.whereaddress').querySelector('.h4').textContent = window.whereaddress;
            document.querySelector('.info__price').textContent = window.totalcost + '₽';
        }
        else{
            if (!where.value) {
                where.classList.add('invalid');
            }
            else{
                where.classList.remove('invalid');
            }
            if (!from.value) {
                from.classList.add('invalid');
            }
            else{
                from.classList.remove('invalid');
            }
        }
    }
    buttons.forEach(button => {
        button.addEventListener('click', onButtonClick);
    });
})()