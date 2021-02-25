(function(){
    let cashButton = document.querySelector('.onlycash');
    let okeyButton = document.querySelector('.ok__button');
    let cash = document.querySelector('.cash__wrap');
    let onCashClick = function () {
        cash.classList.remove('dn');
    };
    let onOkClick = function () {
        cash.classList.add('dn');
    }
    cashButton.addEventListener('click', onCashClick);
    okeyButton.addEventListener('click', onOkClick);
})();