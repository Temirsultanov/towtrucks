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
    let urlRequest = 'https://92.63.105.87:3001/order/makeOrder/293547055';
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
    console.log(myData);
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
    sendRequest(urlRequest, myData)
        .then(data => console.log(data))
        .catch(err => console.log(err));

};
window.waiting = waiting;