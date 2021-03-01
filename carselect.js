(function(){
    let buttons = document.querySelectorAll('.car__buttons');
    let totalCost = document.querySelector('.totalcost');
    buttons.forEach(button => {
        button.addEventListener('click', function(){
            document.querySelector('.car__buttons-active').classList.remove('car__buttons-active');
            button.classList.add('car__buttons-active');
            if (button.classList.contains('car__button-light')) {
                totalCost.textContent = '1800₽';
            }
            else if (button.classList.contains('car__button-4x4')) {
                totalCost.textContent = '2200₽';
            }
            else{
                totalCost.textContent = '1440₽';
            }
        });
    });
    
})();