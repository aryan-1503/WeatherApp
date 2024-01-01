export function displayData(city,temp,region,country,lat,lon,tz,ct,imageUrl,currentText,temp_fl,hum,rain,windSpeed,gustSpeed,vis_km,windDir,windDeg){

    const cityName = document.getElementById('city-name');
    cityName.innerHTML = `${city}`;

    const temperature = document.getElementById('temp');
    temperature.innerHTML = `Temperature : ${temp}℃<hr>`;

    const state = document.getElementById('region');
    state.innerHTML = `Region : ${region}<hr>`

    const countryName = document.getElementById('country');
    countryName.innerHTML = `Country : ${country}<hr>`

    const latitude = document.getElementById('lat');
    latitude.innerHTML = `Latitude : ${lat}<hr>`

    const longitude = document.getElementById('lon');
    longitude.innerHTML = `Longitude : ${lon}<hr>`

    const timeZone = document.getElementById('tz');
    timeZone.innerHTML = `Time Zone : ${tz}<hr>`

    const localTime = document.getElementById('ct');
    localTime.innerHTML = `Current Time : ${ct}<hr>`

    const image = document.getElementById('image-url');
    image.src = imageUrl;

    const wthrType = document.getElementById('wthr-type');
    wthrType.innerHTML = currentText;

    const temperatureFeelsLike = document.getElementById('temp_fl');
    temperatureFeelsLike.innerHTML = `Temperature : ${temp}℃<hr>`;

    const humidity = document.getElementById('humidity');
    humidity.innerHTML = `Humidity : ${hum}%<hr>`

    const precipitation = document.getElementById('rain');
    precipitation.innerHTML = `Rainfall : ${rain}mm<hr>`

    const windSpd = document.getElementById('wind-speed');
    windSpd.innerHTML = `Wind Speed : ${windSpeed}km/h<hr>`

    const gustSpd = document.getElementById('gust-speed');
    gustSpd.innerHTML = `Gust Speed : ${gustSpeed}km/h<hr>`

    const visibility = document.getElementById('visibility');
    visibility.innerHTML = `Visibility : ${vis_km}km<hr>`

    const windDirection = document.getElementById('wind-dir');
    windDirection.innerHTML = `Wind Direction : ${windDir} (${windDeg}°)<hr>`
}
