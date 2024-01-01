import {displayData} from "./website";
console.log("Weather App")
console.log('hello')
fetchCityData('mumbai');

async function displayCityData(){

}

async function fetchCityData(city='vadodara'){
    const API_KEY = '13b158d1de104d9eb9a105827233012'
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    try {
        const response = await fetch(apiUrl,{mode: 'cors'});
        if (!response.ok){
            throw new Error("Network error");
        }
        const responseData = await response.json();
        console.log(responseData);
        displayData(responseData.location.name,responseData.current.temp_c,responseData.location.region,responseData.location.country,responseData.location.lat,responseData.location.lon,responseData.location.tz_id,responseData.location.localtime,responseData.current.condition.icon,responseData.current.condition.text,responseData.current.feelslike_c,responseData.current.humidity,responseData.current.precip_mm,responseData.current.wind_kph,responseData.current.gust_kph,responseData.current.vis_km,responseData.current.wind_dir)
    } catch (e){
        alert(`Error : ${e.message}`);
    }
}














// const temp = responseData.current.temp_c;
// const state = responseData.location.region;
// const country = responseData.location.country;
// const lat = responseData.location.lat;
// const lon = responseData.location.lon;
// const tz = responseData.location.tz_id;
// const ct = responseData.location.localtime;
// const imageUrl = responseData.current.condition.icon;
// const currentText = responseData.current.condition.text;
// const temp_fl = responseData.current.feelslike_c;
// const humidity = responseData.current.humidity;
// const rain = responseData.current.precip_mm;
// const windSpeed = responseData.current.wind_kph;
// const gustSpeed = responseData.current.gust_kph;
// const visibility = responseData.current.vis_km;
// const windDirection = responseData.current.wind_dir;
//
// const content = document.getElementById('content');
// const allInfo = createAllInfo(city,temp,state,country,lat,lon,tz,ct,imageUrl,currentText,temp_fl,humidity,rain,windSpeed,gustSpeed,visibility,windDirection);
// content.append(allInfo);
// function createAllInfo(city,temp,state,country,lat,lon,tz,ct,imageUrl,currentText,temp_fl,humidity,rain,windSpeed,gustSpeed,visibility,windDirection){
//     const locationInfo = document.createElement('div');
//     locationInfo.classList.add('location-info');
//
//     const cityName = document.createElement('div');
//     cityName.id = 'city-name';
//     cityName.innerHTML = city;
//     locationInfo.append(cityName)
//
//     const locInfo = document.createElement('div');
//     locInfo.classList.add('loc-info');
//
//     const temperature = document.createElement('div');
//     temperature.innerHTML = `Temperature : ${temp}℃<hr>`;
//
//     const region = document.createElement('div');
//     region.innerHTML = `State : ${state}<hr>`;
//
//     const countryName = document.createElement('div');
//     countryName.innerHTML = `Country : ${country}<hr>`;
//
//     const latitude = document.createElement('div');
//     latitude.innerHTML = `Latitude : ${lat}<hr>`;
//
//     const longitude = document.createElement('div');
//     longitude.innerHTML = `Longitude : ${lon}<hr>`;
//
//     const timeZone = document.createElement('div');
//     timeZone.innerHTML = `Time Zone : ${tz}<hr>`;
//
//     const currentTime = document.createElement('div');
//     currentTime.innerHTML = `Local Time : ${ct}<hr>`;
//
//     locInfo.append(temperature,region,countryName,latitude,longitude,timeZone,currentTime);
//
//     locationInfo.append(locInfo);
//     allInfo.append(locationInfo)
//
//     const currentInfo = document.createElement('div');
//     currentInfo.classList.add('current-info');
//
//     const img = document.createElement('div');
//     img.classList.add('img');
//
//     const Image = document.createElement('img');
//     Image.src = imageUrl;
//
//     const wthrType = document.createElement('div');
//     wthrType.id = 'wthr-type';
//     wthrType.innerHTML = currentText;
//
//     img.append(Image,wthrType);
//     currentInfo.append(img);
//
//     const curInfo = document.createElement('div');
//     curInfo.classList.add('loc-info');
//
//     const temperatureFeelsLike = document.createElement('div');
//     temperatureFeelsLike.innerHTML = `Temperature(feels like) : ${temp_fl}℃<hr>`;
//
//     const humidityDiv = document.createElement('div');
//     humidityDiv.innerHTML = `Humidity : ${humidity}<hr>`;
//
//     const rainDiv = document.createElement('div');
//     rainDiv.innerHTML = `Rain: ${rain}<hr>`;
//
//     const windSpeedDiv = document.createElement('div');
//     windSpeedDiv.innerHTML = `Wind Speed : ${windSpeed}<hr>`;
//
//     const gustSpeedDiv = document.createElement('div');
//     gustSpeedDiv.innerHTML = `Gust Speed : ${gustSpeed}<hr>`;
//
//     const visibilityDiv = document.createElement('div');
//     visibilityDiv.innerHTML = `Visibility : ${visibility}<hr>`;
//
//     const windDirectionDiv = document.createElement('div');
//     windDirectionDiv.innerHTML = `Wind Direction : ${windDirection}<hr>`;
//
//     curInfo.append(temperatureFeelsLike,humidityDiv,rainDiv,windSpeedDiv,gustSpeedDiv,visibilityDiv);
//     currentInfo.append(curInfo);
//
//     allInfo.append(currentInfo);
//
//     return allInfo;
// }
