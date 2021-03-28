(function(){   
    document.body.style.height = `${window.innerHeight}px`;
    window.addEventListener('resize', function(){
        document.body.style.height = `${window.innerHeight}px`;
    });
    window.totalcost = 1900;
    window.fromaddress = '';
    window.whereaddress = '';
    window.type = 'platform';
    window.phone = '';
    // document.querySelector('.totalcost').textContent = window.totalcost + '₽';


    // Тут содержится код свайпа менюшки вниз
    let info = document.querySelector('.order__content');
    let translateNumber = info.getBoundingClientRect().height - 200;
    let where = document.querySelector('#where');
    let from = document.querySelector('#from');
    let onInputChange = function () {
        window.translateNumber = info.getBoundingClientRect().height - 200;
    }
    from.addEventListener('change', onInputChange);
    where.addEventListener('change', onInputChange);
    let fromInput = document.querySelector('.input-from');
    let whereInput = document.querySelector('.input-where');
    // let carInput = document.querySelector('.input-car');
    let phone = document.querySelector('.phone');
    // let total = document.querySelector('.total')
    let techSelect = document.querySelector('.tech-select');
    // Если заполнены все поля, попап с телефоном убирается и блок отодвигается вниз на другое кол-во пикселей
    let onInput = function () {
        
    }

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
                else if (translate > 0){
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
            if (translate > -160 && translate < translateNumber) {
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

    ymaps.ready(init);
    function init(){
        let from, where, firstGeoObject, secondGeoObject;
        var myMap = new ymaps.Map("map", {
            center: [52.487893,29.287772],
            zoom: 9,
            controls: [],
        });
        var suggestFrom = new ymaps.SuggestView('from');
        var suggestWhere = new ymaps.SuggestView('where');
        var location = ymaps.geolocation.get();
        location.then(
            function(result) {
                firstGeoObject = result.geoObjects.get(0);
                    document.querySelector('#from').classList.remove('invalid');
                    if (secondGeoObject && firstGeoObject) {
                        // total.classList.remove('dn');
                        techSelect.classList.add('tech-select-price');
                        // translateNumber = info.getBoundingClientRect().height - 200;
                    }
                    firstGeoObject.options.set('iconLayout', 'default#image');
                    firstGeoObject.options.set('iconImageHref', 'images/darklocation.svg');
                    firstGeoObject.options.set('iconImageSize', [38, 38]);
                    firstGeoObject.options.set('iconImageOffset', [-19, -38]);
                    myMap.geoObjects.add(firstGeoObject);
                    myMap.setBounds(myMap.geoObjects.getBounds());
                    if (myMap.getZoom() > 16) {
                        myMap.setZoom(16);
                    }
                    from = firstGeoObject.properties._data.text;
                    suggestFrom._panel._anchor.value = from;
            }, 
            function(err) {
                console.log('Ошибка: ' + err);
            }
        );
        let onFromChange = function () {
            from = suggestFrom.state.get('request');
            myMap.geoObjects.remove(firstGeoObject);
            ymaps.geocode(from, {
                results: 1
            }).then(function (res) {
                    firstGeoObject = res.geoObjects.get(0);
                    document.querySelector('#from').classList.remove('invalid');
                    if (secondGeoObject && firstGeoObject) {
                        // total.classList.remove('dn');
                        techSelect.classList.add('tech-select-price');
                        // translateNumber = info.getBoundingClientRect().height - 200;
                    }
                    firstGeoObject.options.set('iconLayout', 'default#image');
                    firstGeoObject.options.set('iconImageHref', 'images/darklocation.svg');
                    firstGeoObject.options.set('iconImageSize', [38, 38]);
                    firstGeoObject.options.set('iconImageOffset', [-19, -38]);
                    myMap.geoObjects.add(firstGeoObject);
                    myMap.setBounds(myMap.geoObjects.getBounds());
                    if (myMap.getZoom() > 16) {
                        myMap.setZoom(16);
                    }
                });
        };
        let onWhereChange = function () {
            where = suggestWhere.state.get('request');
            myMap.geoObjects.remove(secondGeoObject);
            ymaps.geocode(where, {
                results: 1
            }).then(function (res) {
                    secondGeoObject = res.geoObjects.get(0);
                    document.querySelector('#where').classList.remove('invalid');
                    if (secondGeoObject && firstGeoObject) {
                        // total.classList.remove('dn');
                        techSelect.classList.add('tech-select-price');
                        // translateNumber = info.getBoundingClientRect().height - 200;
                    }
                    secondGeoObject.options.set('iconLayout', 'default#image');
                    secondGeoObject.options.set('iconImageHref', 'images/violetlocationmap.svg');
                    secondGeoObject.options.set('iconImageSize', [38, 38]);
                    secondGeoObject.options.set('iconImageOffset', [-19, -38]);
                    myMap.geoObjects.add(secondGeoObject);
                    myMap.setBounds(myMap.geoObjects.getBounds());
                    if (myMap.getZoom() > 16) {
                        myMap.setZoom(16);
                    }
                });
            
        }
        suggestFrom.events.add('select', onFromChange);
        suggestFrom.events.add('change', onFromChange);
        suggestWhere.events.add('select', onWhereChange);
        suggestWhere.events.add('change', onWhereChange);
    }
})()