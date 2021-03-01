(function(){
    let readyButton = document.querySelector('.ready__button');
    let searching = document.querySelector('.searching');
    let phoneInput = document.querySelector('.phoneinput');
    let onReadyButtonClick = function () {
        phoneInput.classList.add('dn');
        searching.classList.remove('dn');
    }
    readyButton.addEventListener('click', onReadyButtonClick);
})();