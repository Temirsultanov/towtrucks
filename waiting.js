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
    let urlRequest = new URL('http://92.63.105.87:443/order/makeOrder/458946670');
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
    urlRequest.searchParams.set('phone', window.phone.slice(1, window.phone.length));
    urlRequest.searchParams.set('cost', window.totalcost);
    urlRequest.searchParams.set('from', window.fromaddress.trim());
    urlRequest.searchParams.set('to', window.whereaddress.trim());
    urlRequest.searchParams.set('type', window.type);
    function sendRequest(url, body) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        }).then(response => {
            return response.json()
        })
    }
    function sendRequestGet(url) {
        return fetch(url, {
            method: 'GET',
        }).then(response => {
            return response.json()
        })
    }
    sendRequestGet(urlRequest)
        .then(data => console.log(data))
        .catch(err => console.log(err));

    // sendRequest(urlRequest, myData)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

};
window.waiting = waiting;