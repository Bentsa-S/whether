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