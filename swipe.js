(function(){
    // Тут содержится код свайпа менюшки вниз
    let info = document.querySelector('.order__content');
    let translateNumber = info.getBoundingClientRect().height - 40;
    let where = document.querySelector('#where');
    let from = document.querySelector('#from');
    let onInputChange = function () {
        window.translateNumber = info.getBoundingClientRect().height - 40;
    }
    from.addEventListener('change', onInputChange);
    where.addEventListener('change', onInputChange);
    let fromInput = document.querySelector('.input-from');
    let whereInput = document.querySelector('.input-where');
    // let carInput = document.querySelector('.input-car');
    let phone = document.querySelector('.phone');
    let total = document.querySelector('.total')
    // Если заполнены все поля, попап с телефоном убирается и блок отодвигается вниз на другое кол-во пикселей
    let onInput = function () {
        if (fromInput.value && whereInput.value) { // && carInput.value
            phone.classList.add('dn');
            total.classList.remove('dn');
            translateNumber = info.getBoundingClientRect().height - 40;
            if (window.navigator.userAgent.indexOf('Android') > -1) {
                translateNumber = 320;
            }
        }
        else{
            phone.classList.remove('dn');
            total.classList.add('dn');
            translateNumber = info.getBoundingClientRect().height - 40;
        }
    }
    // Добавляю функцию всем 3 инпутам
    fromInput.addEventListener('input', onInput);
    whereInput.addEventListener('input', onInput);
    // carInput.addEventListener('input', onInput);

    // Свайп
    let translate = 0;
    let startCoord = 0;
    let curCoord = 0;
    let closed = false;
    let isMoving = false;
    // Функция отжатия мыши
    // Если флажок движения true, то проверяю, закрыт ли был до этого попап, в зависимости от стороны я расписал немного разное взаимодейстие. Если он был закрыт, достаточно лишь нажать на попап и он раскроется. Если свайпнули больше чем на 70 пикселей, попап закрывается
    let onInfoMouseup = function (evt) {
        if (isMoving) {
            info.style.transition = '0.3s ease';
            if (!closed) {
                if (translate > 70) {
                    translate = translateNumber;
                    info.style.transform = `translateY(${translate}px)`;
                    // info.style.transform = '-100%';
                    closed = true;
                }
                else{
                    info.style.transform = 'translateY(0px)';
                    translate = 0 ;
                }
            }
            else{
                info.style.transform = 'translateY(0px)';
                translate = 0 ;
                closed = false;   
            }
            isMoving = false;
        }
    };
    // Функция движения мыши
    // Проверяю флажок движения, если он true, то смотрю, на сколько изменилось положение мыши и меняю положение блока по этому значению
    let onInfoMousemove = function (evt) {
        if (isMoving) {
            curCoord = evt.clientY || evt.touches[0].pageY;
            translate+=(curCoord - startCoord);
            // document.write(evt.clientY, ' --- ',startCoord);
            if (translate > 0 && translate < translateNumber) {
                info.style.transform = `translateY(${translate}px)`;
            }
            startCoord = curCoord;
        }
    };
    // Функция нажатия мыши
    // При клике отчитываю первые координаты мыши и ставлю флажок, что движение начато
    let onInfoMousedown = function (evt) {
        startCoord = evt.clientY || evt.touches[0].pageY;
        info.style.transition = '0s';
        isMoving = true;
    };
    info.addEventListener('mousedown', onInfoMousedown);
    info.addEventListener('mousemove', onInfoMousemove);
    window.addEventListener('mouseup', onInfoMouseup);
    info.addEventListener('mouseleave',onInfoMouseup);

    info.addEventListener('touchstart', onInfoMousedown);
    info.addEventListener('touchmove', onInfoMousemove);
    window.addEventListener('touchend', onInfoMouseup);
})()