(function(){
    let where = document.querySelector('#where');
    let from = document.querySelector('#from');
    // let car = document.querySelector('.input-car');
    let order = document.querySelector('.order__content');
    let onFromEnter = function (evt) {
        if (evt.keyCode === 13) {
            where.focus();
        }
    }
    // let onWhereEnter = function (evt) {
    //     if (evt.keyCode === 13) {
    //         car.focus();
    //     }
    // }
    let onInputFocus = function (evt) {
        order.classList.add('order-on-top');
    }
    let onInputBlur = function (evt) {
        order.classList.remove('order-on-top');
    }
    let device = window.navigator.userAgent;
    from.addEventListener('keydown', onFromEnter);
    // where.addEventListener('keydown', onWhereEnter);
    // if (device.indexOf('Android')) {
    //     from.addEventListener('focus', onInputFocus);
    //     where.addEventListener('focus', onInputFocus);
    //     car.addEventListener('focus', onInputFocus);
    //     from.addEventListener('blur', onInputBlur);
    //     where.addEventListener('blur', onInputBlur);
    //     car.addEventListener('blur', onInputBlur);
    // }
})();