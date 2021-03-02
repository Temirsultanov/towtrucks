(function(){
    let buttons = document.querySelectorAll('.car__buttons');
    let totalCost = document.querySelector('.totalcost');
    buttons.forEach(button => {
        button.addEventListener('click', function(){
            document.querySelector('.car__buttons-active').classList.remove('car__buttons-active');
            button.classList.add('car__buttons-active');
            if (button.classList.contains('car__button-light')) {
                window.type = 'light';
                window.totalcost = '1800';
                totalCost.textContent = `${window.totalcost}₽`;
            }
            else if (button.classList.contains('car__button-4x4')) {
                window.type = '4x4';
                window.totalcost = '2200';
                totalCost.textContent = `${window.totalcost}₽`;
            }
            else{
                window.type = 'moto';
                window.totalcost = '1440';
                totalCost.textContent = `${window.totalcost}₽`;
            }
        });
    });
    
})();