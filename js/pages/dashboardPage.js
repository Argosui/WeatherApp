import { dashboardTemplate } from "../appTemplates/dashboard.js";
import { dashboardDom } from "../dom/dashboarddom.js";
import { API_CONFIG, fetchAPI } from "../api.js";



export async function loadDashboard(city) {
    const app = document.querySelector(".container");

    app.innerHTML = dashboardTemplate

    const dom = dashboardDom(app);

    const urlBase = `${API_CONFIG.weather.baseUrl}?q=${city}&appid=${API_CONFIG.weather.key}&units=${API_CONFIG.weather.units}&lang=${API_CONFIG.weather.lang}`;
    console.log(urlBase);
    const data = await fetchAPI(urlBase);

    const urlForecast = `${API_CONFIG.forecast.baseUrl}?q=${city}&appid=${API_CONFIG.weather.key}&units=${API_CONFIG.weather.units}&lang=${API_CONFIG.weather.lang}`;
    const forecast = await fetchAPI(urlForecast);
    
    if (data && forecast) {
        loadInfo(dom, forecast, data);
    }
}

function loadInfo(dom, forecast, data){
    dom.cityName.textContent = `${data.name}, ${data.sys.country}`;
    dom.cityTemp.textContent = `${Math.round(data.main.temp)}º`;
    dom.weatherSky.textContent = data.weather[0].description;
    dom.weatherFeeling.textContent = `${Math.round(data.main.feels_like)}`;
    dom.cityHeight.textContent = `${Math.round(data.coord.lon)}`;
    dom.cityLatitude.textContent = `${Math.round(data.coord.lat)}`;

    const humidity = data.main.humidity;

    dom.humidityNumber.textContent = humidity + "%";
    dom.humidityBar.style.width = humidity + "%";

    
const visibility = data.visibility/1000

if (visibility >= 10){
    dom.visibilityDescription.textContent = "Perfectamente visible";
} else if (visibility >= 4){
    dom.visibilityDescription.textContent = "Visibilidad regular"
} else {
    dom.visibilityDescription.textContent = "Visibilidad mala"
}

    dom.visibilityNumber.textContent = visibility;

    hourlyForecast(dom, forecast);

    
    
    
}


function hourlyForecast(dom, forecast){

    dom.hoursContainer.innerHTML = "";

    for (let i = 0; i < 9; i++){
        const container = document.createElement("div");
        container.classList.add("hours");

        const hour = document.createElement("p");
        hour.classList.add("hour");

        let hora = forecast.list[i].dt_txt.slice(11,13);
        let time = "";

        if(hora >= 12){
            hora = hora - 12;
            time = "PM";
            
        } else {
            time = "AM";
            hora = hora.slice(1,2);
        }
        

        
        hour.textContent = hora + " " + time;

        const icono = document.createElement("span");
        icono.classList.add("fill", "icon", "material-symbols-outlined");

        const temp = document.createElement("p");
        temp.classList.add("degrees");
        temp.innerText = Math.round(forecast.list[i].main.temp) + "º"; 

        container.appendChild(hour);
        container.appendChild(icono);
        container.appendChild(temp);

        dom.hoursContainer.appendChild(container);
    }
}