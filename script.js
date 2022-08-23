const param = {
    "url": "https://api.openweathermap.org/data/2.5/" ,
    "appid": "1b9ce3d6d289b39de8b7be29d4a9fb6d",
}

function getWeather() {
    const cityId = document.querySelector("#city").value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather (data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
//https://openweathermap.org/img/wn/02d@2x.png
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector("#city").onchange = getWeather;

