(function(){
    // let buttons = document.querySelectorAll('.car__buttons');
    // let totalCost = document.querySelector('.totalcost');
    // buttons.forEach(button => {
    //     button.addEventListener('click', function(){
    //         document.querySelector('.car__buttons-active').classList.remove('car__buttons-active');
    //         button.classList.add('car__buttons-active');
    //         if (button.classList.contains('car__button-light')) {
    //             window.type = 'light';
    //             window.totalcost = '1800';
    //             totalCost.textContent = `${window.totalcost}₽`;
    //         }
    //         else if (button.classList.contains('car__button-4x4')) {
    //             window.type = '4x4';
    //             window.totalcost = '2200';
    //             totalCost.textContent = `${window.totalcost}₽`;
    //         }
    //         else{
    //             window.type = 'moto';
    //             window.totalcost = '1440';
    //             totalCost.textContent = `${window.totalcost}₽`;
    //         }
    //     });
    // });
    let buttons = document.querySelectorAll('.tech__item');
    let techName = document.querySelector('.tech__name');
    let techDesc = document.querySelector('.tech__desc');
    buttons.forEach(button => {
        button.addEventListener('click', function(){
            document.querySelector('.tech__item-active').classList.remove('tech__item-active');
            button.classList.add('tech__item-active');
            if (button.classList.contains('tech__item-platform')) {
                window.type = 'platform';
                window.totalcost = '2500';
                techName.textContent = 'Платформа';
                techDesc.textContent = 'Оптимальный вариант для большинства случаев. Машину закатывают на платформу';
            }   
            else if (button.classList.contains('tech__item-manipulator')) {
                window.type = 'manipulator';
                window.totalcost = '1900';
                techName.textContent = 'Манипулятор';
                techDesc.textContent = 'Машина в кювете, рулевое управление неисправно и прочие сложные случаи';
            }   
            else{
                window.type = 'partload';
                window.totalcost = '1000';
                techName.textContent = 'Частичная погрузка';
                techDesc.textContent = 'Подойдет в случае если передние или задние колеса автомобиля исправны';

            }
        });
    });
})();