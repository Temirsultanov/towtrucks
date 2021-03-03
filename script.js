(function(){   
    document.body.style.height = `${window.innerHeight}px`;
    window.addEventListener('resize', function(){
        document.body.style.height = `${window.innerHeight}px`;
    });
    window.totalcost = 2200;
    window.fromaddress = '';
    window.whereaddress = '';
    window.type = '4x4';
    window.phone = '';
    document.querySelector('.totalcost').textContent = window.totalcost + '₽';

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
                    var coords1 = firstGeoObject.geometry.getCoordinates(), bounds1 = firstGeoObject.properties.get('boundedBy');
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
                    var coords2 = secondGeoObject.geometry.getCoordinates(), bounds2 = secondGeoObject.properties.get('boundedBy');
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