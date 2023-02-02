let nameMonth = ['січня','люте','березеня','квітня','травня','червня','липня','серпня','вересня','жовтня','листопада','грудня'],
    weak = ['неділя','понеділок','вівторок','середа','четвер',"п'ятниця",'субота']

setTimeout( () =>{
let time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes();
    minutes < 10 ? minutes = `0${minutes}` : minutes
    hours < 10 ? hours = `0${hours}` : hours;
document.querySelector('.time').textContent = `${hours}:${minutes}`

let day = time.getDay(),
    mount = time.getUTCMonth(),
    date = time.getDate()

document.querySelector('.date').textContent = `${weak[day]} ${date} ${nameMonth[mount]}`

} , 1000)