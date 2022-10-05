setTimeout( () =>{
let time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes();
    minutes < 10 ? `0${minutes}` : minutes;
    hours < 10 ? `0${hours}` : hours;
document.querySelector('.time').textContent = `${hours}:${minutes}`

let day = time.getDay(),
    mount = time.getUTCMonth(),
    date = time.getDate()

document.querySelector('.date').textContent = `${date}`

} , 1000)