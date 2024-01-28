// const inputbox = document.querySelector(".input-box")
// const searchBtn = document.querySelector("button")
// const Temparature = document.querySelector(".temp")
// const des = document.querySelector(".des")
// const weather_img = document.querySelector(".weather_img")
// const humidity = document.querySelector("#humidity")
// const windspeed = document.querySelector("#windspeed")





// async function cheakWeather(city) {
//     const api_key = "b24a7215789ba1ef6fe3b9ff19b9fecc";
//     const url = `
//     https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`



//     const weather_data = await fetch(`${url}`).then(response => response.json());


//     Temparature.innerHTML = `${(weather_data.main.Temperature - 273.15)}`;
//     des.innerHTML = `${weather_data.weather[0]}`
//     humidity.innerHTML = `${weather_data.main.humidity}%`
//     wind.innerHTML = `${weather_data.wind.speed} kmph`

//     switch (weather_data.weather[0].main) {
//         case "clouds" :
//             weather_img.src ="Weather-App\assets\cloud.png";
//             break;

//             case "rain" :
//                 weather_img.src ="Weather-App\assets\rain.png";
//                 break;
            
//                 case "clear" :
//                     weather_img.src ="Weather-App\assets\clear.png";
//                     break;
            
//                     case "mist" :
//                         weather_img.src ="Weather-App\assets\mist.png";
//                         break;
//                         case "snow" :
//                             weather_img.src ="Weather-App\assets\snow.png";
//                             break;
                            
                        

//    }





// };




// searchBtn.addEventListener('click', () => {

//     cheakWeather(inputbox.value)
// })


// const inputBox = document.querySelector('.input-box');
// const searchBtn = document.getElementById('searchBtn');
// const weather_img = document.querySelector('.weather-img');
// const temperature = document.querySelector('.temperature');
// const description = document.querySelector('.description');
// const humidity = document.getElementById('humidity');
// const wind_speed = document.getElementById('wind-speed');

// const location_not_found = document.querySelector('.location-not-found');

// const weather_body = document.querySelector('.weather-body');


// async function checkWeather(city){
//     const api_key = "4cd0eee81294c867b4bc4cfc64e998c5";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//     const weather_data = await fetch(`${url}`).then(response => response.json());


//     if(weather_data.cod === `404`){
//         location_not_found.style.display = "flex";
//         weather_body.style.display = "none";
//         console.log("error");
//         return;
//     }

//     console.log("run");
//     location_not_found.style.display = "none";
//     weather_body.style.display = "flex";
//     temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
//     description.innerHTML = `${weather_data.weather[0].description}`;

//     humidity.innerHTML = `${weather_data.main.humidity}%`;
//     wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


//     switch(weather_data.weather[0].main){
//         case 'Clouds':
//             weather_img.src = "Weather-App\assets\cloud.png";
//             break;
//         case 'Clear':
//             weather_img.src = "Weather-App\assets\clear.png";
//             break;
//         case 'Rain':
//             weather_img.src = "/assets/rain.png";
//             break;
//         case 'Mist':
//             weather_img.src = "Weather-App\assets\rain.png";
//             break;
//         case 'Snow':
//             weather_img.src = "Weather-App\assets\snow.png";
//             break;

//     }

//     console.log(weather_data);
// }


// searchBtn.addEventListener('click', ()=>{
//     checkWeather(inputBox.value);
// });