import {displayData} from "./website";

console.log("Weather App")

window.addEventListener('load',async function(){
    await displayCityData('Vadodara');
    console.log('Vadodara data displayed initially.')
});

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit',async function (event){
    event.preventDefault();
    const cityInput = document.getElementById('city').value.trim();
    if (cityInput !== ''){
        await displayCityData(cityInput);
        console.log('Data displayed')
    }else {
        alert("Please enter a city name!!");
    }
});

async function displayCityData(city='india'){
    const API_KEY = '13b158d1de104d9eb9a105827233012'
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    try {
        const response = await fetch(apiUrl,{mode: 'cors'});
        if (!response.ok){
            throw new Error("Please enter a valid name");
        }
        const responseData = await response.json();
        displayData(responseData.location.name,responseData.current.temp_c,responseData.location.region,responseData.location.country,responseData.location.lat,responseData.location.lon,responseData.location.tz_id,responseData.location.localtime,responseData.current.condition.icon,responseData.current.condition.text,responseData.current.feelslike_c,responseData.current.humidity,responseData.current.precip_mm,responseData.current.wind_kph,responseData.current.gust_kph,responseData.current.vis_km,responseData.current.wind_dir,responseData.current.wind_degree,responseData.current.is_day);
    } catch (e){
        alert(`Error : ${e.message}`);
    }
}




















