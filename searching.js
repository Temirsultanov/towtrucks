(function(){
    let readyButton = document.querySelector('.ready__button');
    let searching = document.querySelector('.searching');
    let phoneInput = document.querySelector('.phoneinput');
    let phoneInputBox = document.querySelector('#phone');
    let phoneinputwrap = document.querySelector('.phoneinput__wrap');
    let drive = document.querySelector('.drive__wrap');
    let onReadyButtonClick = function () {
        if (phoneInputBox.value.length === 16) {
            phoneInputBox.classList.remove('invalid');
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
        else{
            phoneInputBox.addEventListener('input', function() {
                if (phoneInputBox.value.length === 16) {
                    phoneInputBox.classList.remove('invalid');
                }        
                else{
                    phoneInputBox.classList.add('invalid');
                }
            });
            phoneInputBox.classList.add('invalid');
        }
        
    }
    if (readyButton) {
        readyButton.addEventListener('click', onReadyButtonClick);
    }
})();