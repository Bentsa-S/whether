let cityName = String
let APIkey = '343d33d71141f1623d91c8c8aab91982'

searchCity('запоріжжя')
//
// pushWeatherDay(47.8508, 35.1183)


function searchCity(city) {
    cityName = `${city}`
    let urlID = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIkey}`

        fetch(urlID)
        .then((f) =>(f.json()))
        .then(date => {
            let lat = date[0].lat,
                lon = date[0].lon;
            document.querySelector('.name-citi').textContent = `${date[0].name}`
            forecastHour(lat, lon, 0)
            pushWeatherDay(lat, lon)
        })
}


function searchCitiToGeolocation(props){
    let lon = props.coords.longitude
    let lat = props.coords.latitude
    console.log(props)
    forecastRemove()

    let urlForecastHours = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`

    fetch(urlForecastHours)
        .then(forecast => forecast.json())
        .then(date => {
            document.querySelector('.name-citi').textContent = `${date.city.name}`
        })
    forecastHour(lat, lat, 0)
    pushWeatherDay(lat, lat,)
}

class whetherDay{
    constructor(day, img, temp) {
        this.container = document.createElement('div')
        this.dayWeak = document.createElement('div')
        this.img = document.createElement('img')
        this.temp = document.createElement('div')

        this.container.classList.add('forecast-weather-container')
        this.dayWeak.classList.add('day')
        this.img.classList.add('forecast')
        this.temp.classList.add('temp')

        this.dayWeak.textContent = `${day}`
        this.img.src = `img/icon/${img}`
        this.temp.textContent = `${temp}`
    }

     get push(){
        let nav = document.querySelector('.nav')
        nav.append(this.container)
        this.container.append(this.dayWeak)
        this.container.append(this.img)
        this.container.append(this.temp)

    }

}




function activeWeatherContainer(i) {
    let container = document.querySelectorAll('.forecast-weather-container'),
        img = document.querySelectorAll('.forecast'),
        day = document.querySelectorAll('.day'),
        temp = document.querySelectorAll('.temp'),
        index = 0;

    container.forEach((e) => {
        e.removeAttribute('id')
        img[index].removeAttribute('id')
        day[index].removeAttribute('id')
        temp[index].removeAttribute('id')
        index++
    })



    container[i].setAttribute('id', 'active-container')
    img[i].setAttribute('id', 'active-forecast')
    day[i].setAttribute('id', 'active-day')
    temp[i].setAttribute('id', 'active-temp')

    container[i].setAttribute('data-sensor', `${i}`)
}

function pushWeatherDay(lat, lon){
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=7&appid=${APIkey}&units=metric`,
        today = new Date(),
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    let daysNextWeak = days.splice(today.getDay())
    days.forEach((day) => daysNextWeak.push(day))
    daysNextWeak[0] = 'Today'

    fetch(url)
        .then((r) => r.json())
        .then((date) => {
            console.log(date)
            for (let i = 0; i < 5; i++){
                let localClass = new whetherDay(daysNextWeak[i], `${date.daily[i].weather[0].main}.png`, `${date.daily[i].temp.day}` + ' C°')
                localClass.push

                let containerWeatherDay = document.querySelectorAll('.forecast-weather-container')
                containerWeatherDay[i].addEventListener('click', (e) =>{
                    activeWeatherContainer(i);
                    sensorSwitch(lat, lon)
                })
            }
            activeWeatherContainer(0)
        })
}






