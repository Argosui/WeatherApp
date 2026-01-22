import { dashboardTemplate } from "../appTemplates/dashboard.js";
import { dashboardDom } from "../dom/dashboarddom.js";
import { API_CONFIG, fetchAPI } from "../api.js";



export async function loadDashboard(city) {
    const app = document.querySelector(".container");

    app.innerHTML = dashboardTemplate

    const dom = dashboardDom(app);

    const url = `${API_CONFIG.weather.baseUrl}?q=${city}&appid=${API_CONFIG.weather.key}&units=${API_CONFIG.weather.units}&lang=${API_CONFIG.weather.lang}`;
    console.log(url);
    const data = await fetchAPI(url);

    if (data) {
        loadInfo(dom, data);
    }
}

function loadInfo(dom, data){
    dom.cityName.textContent = `${data.name}, ${data.sys.country}`;
    dom.cityTemp.textContent = `${Math.round(data.main.temp)}º`;
    dom.weatherSky.textContent = data.weather[0].description;
    dom.weatherFeeling.textContent = `${Math.round(data.main.feels_like)}`;
    dom.cityHeight.textContent = `${Math.round(data.coord.lon)}`;
    dom.cityLatitude.textContent = `${Math.round(data.coord.lat)}`;
}
