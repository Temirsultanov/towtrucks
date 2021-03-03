let waiting = function () {
    let timer = document.querySelector('.timer'), minute = 30, second = 0 ;
    let timing = setInterval(() => {
        if (minute === 0 && second === 1) {
            clearInterval(timing);
            second-=1;
            document.querySelector('.drive').querySelector('.h1').textContent = 'Эвакуатор подъезжает'; 
        }
        else if (second === 0){
            second = 59;
            minute -=1;
        }
        else{
            second-=1;
        }
        timer.textContent = `Осталось примерно: ${minute > 9 ? minute : '0' + minute}:${second > 9 ? second : '0' + second}`
    }, 1000);

    let urlRequest = 'https://bot.hse-se.ru/bot/api/2/custom/fwd/293547055';
    let data = {
        cost: window.totalcost,
        phone: window.phone,
        type: window.type,
        fromaddress: window.fromaddress,
        whereaddress: window.whereaddress,
    }
    console.log(data);
    function sendRequest(method, url, data = null) {
        const headers = {
            'Content-Type': 'application/json'
        }
        return fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: headers
        }).then(response => {
            return response.json()
        })
    }
    sendRequest('POST', urlRequest, data)
        .then(data => console.log(data))
        .catch(err => console.log(err));



};
window.waiting = waiting;