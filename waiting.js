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
    let urlRequest = new URL('https://backend.vozex.ru/order/makeOrder/293547055');
    let secondUrlRequest = new URL('https://backend.vozex.ru/order/makeOrder/434773687');
    let thirdUrlRequest = new URL('https://backend.vozex.ru/order/makeOrder/-1001189021808');
    let date = new Date();
    let id = `${(date.getMonth() + 1 > 9 ? date.getMonth() + 1: '0' + (date.getMonth() + 1))}${date.getDate() > 9 ? date.getDate() : '0' + date.getDate()}${date.getHours() > 9 ? date.getHours() : '0' + date.getHours()}${date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()}`;

    let myData = {
        id: ' ' + id,
        phone: window.phone.slice(1, window.phone.length),
        cost: window.totalcost,
        from: window.fromaddress.trim(),
        to: window.whereaddress.trim(),
        type: window.type,
    }
    urlRequest.searchParams.set('id', id);
    urlRequest.searchParams.set('phone', '+' + window.phone.slice(1, window.phone.length));
    urlRequest.searchParams.set('cost', window.totalcost);
    urlRequest.searchParams.set('from', window.fromaddress.trim());
    urlRequest.searchParams.set('to', window.whereaddress.trim());
    urlRequest.searchParams.set('type', window.type);
    secondUrlRequest.searchParams.set('id', id);
    secondUrlRequest.searchParams.set('phone', '+' + window.phone.slice(1, window.phone.length));
    secondUrlRequest.searchParams.set('cost', window.totalcost);
    secondUrlRequest.searchParams.set('from', window.fromaddress.trim());
    secondUrlRequest.searchParams.set('to', window.whereaddress.trim());
    secondUrlRequest.searchParams.set('type', window.type);
    
    thirdUrlRequest.searchParams.set('id', id);
    thirdUrlRequest.searchParams.set('phone', '+' + window.phone.slice(1, window.phone.length));
    thirdUrlRequest.searchParams.set('cost', window.totalcost);
    thirdUrlRequest.searchParams.set('from', window.fromaddress.trim());
    thirdUrlRequest.searchParams.set('to', window.whereaddress.trim());
    thirdUrlRequest.searchParams.set('type', window.type);

    // function sendRequestGet(url) {
    //     return fetch(url, {
    //         method: 'GET',
    //     }).then(response => {
    //         return response.json()
    //     })
    // }

    // sendRequestGet(urlRequest)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

    // sendRequestGet(secondUrlRequest)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));


    function sendRequest(url, body) {
        return fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            return response.json()
        });
    }

    sendRequest(urlRequest, myData)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    sendRequest(secondUrlRequest, myData)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    sendRequest(thirdUrlRequest, myData)
        .then(data => console.log(data))
        .catch(err => console.log(err));

};
window.waiting = waiting;