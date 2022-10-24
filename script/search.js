let  output = document.querySelector('#output')
let search = document.querySelector('#search')

function forecastRemove(){
    let div = document.querySelectorAll('.forecast-weather-container')
    div.forEach((i) => i.remove())
}

search.addEventListener('click', (e) =>{
    forecastRemove()
    searchCity(output.value)
})

output.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter'){
        forecastRemove()
        searchCity(output.value)
    }
})