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
    let myData = {
        phone: window.phone,
        cost: window.totalcost,
        from: window.fromaddress.trim(),
        where: window.whereaddress.trim(),
        type: window.type,
    }
    function sendRequest(url, body) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            return response.json()
        })
    }
    sendRequest(urlRequest, myData)
        .then(data => console.log(data))
        .catch(err => console.log(err));

};
window.waiting = waiting;