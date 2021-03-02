(function(){
    let readyButton = document.querySelector('.ready__button');
    let searching = document.querySelector('.searching');
    let phoneInput = document.querySelector('.phoneinput');
    let phoneinputwrap = document.querySelector('.phoneinput__wrap');
    let drive = document.querySelector('.drive__wrap');
    let totalCost
    let onReadyButtonClick = function () {
        phoneInput.classList.add('dn');
        window.phone = document.querySelector('#phone').value;
        searching.classList.remove('dn');
        setTimeout(() => {
            searching.classList.add('dn');
            phoneinputwrap.classList.add('dn');
            drive.classList.remove('dn');
            window.waiting();
        }, 5000);
    }
    if (readyButton) {
        readyButton.addEventListener('click', onReadyButtonClick);
    }
})();