
function forecastHour(lat, lon, n){
    let urlForecastHours = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`

    fetch(urlForecastHours)
        .then(forecast => forecast.json())
        .then(date => {
            clickHours(0, date.list[0 + n].wind.speed, date.list[0 + n].visibility, date.list[0 + n].weather[0].description, date.list[0 + n].main.temp, date.list[0 + n].dt_txt)
            clickHours(1, date.list[2 + n].wind.speed, date.list[2 + n].visibility, date.list[2 + n].weather[0].description, date.list[2 + n].main.temp, date.list[2 + n].dt_txt)
            clickHours(2, date.list[4 + n].wind.speed, date.list[4 + n].visibility, date.list[4 + n].weather[0].description, date.list[4 + n].main.temp, date.list[4 + n].dt_txt)

            let time = document.querySelectorAll('.time-whether')

            document.querySelector('.wind-speed').textContent = `Wind speed -- ${date.list[0 + n].wind.speed} км/г`
            document.querySelector('.visibility').textContent = `Visibility -- ${date.list[0 + n].visibility} м`
            time.forEach((e) => e.classList.remove('active-hours'))
            time[0].classList.add('active-hours')

        })

}

function clickHours(i, windSpeedText, visibilityText, weatherDescriptionText, tempText, time){
    let weatherTime = document.querySelectorAll('.time-whether'),
        windSpeed = document.querySelector('.wind-speed'),
        visibility = document.querySelector('.visibility'),
        whetherText = document.querySelectorAll('.text-whether'),
        today = new Date(time)
    console.log(today)
    weatherTime[i].textContent = `${today.getHours()}:00`
    whetherText[i].textContent = `-- ${weatherDescriptionText},  temp ${tempText} C°`


    weatherTime[i].addEventListener('click', () =>{
        weatherTime.forEach((e) => e.classList.remove('active-hours'))
        weatherTime[i].classList.add('active-hours')
        windSpeed.textContent = `Wind speed -- ${windSpeedText} км/г`
        visibility.textContent = `Visibility -- ${visibilityText} м`
    })

}

function sensorSwitch(lat, lon){
    let data = document.querySelector('#active-container')
    switch (data.getAttribute('data-sensor')) {
        case '0' :
            forecastHour(lat, lon, 0)
            break;
        case '1' :
            forecastHour(lat, lon, 8)
            break;
        case '2' :
            forecastHour(lat, lon, 16)
            break;
        case '3' :
            forecastHour(lat, lon, 24)
            break;
        case '4' :
            forecastHour(lat, lon, 32)
            break;
    }
}