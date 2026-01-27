import { dashboardTemplate } from "../appTemplates/dashboard.js";
import { dashboardDom } from "../dom/dashboarddom.js";
import { API_CONFIG, fetchAPI } from "../api.js";

export async function loadDashboard(city) {
  const app = document.querySelector(".container");

  app.innerHTML = dashboardTemplate;

  const dom = dashboardDom(app);

  const urlBase = `${API_CONFIG.weather.baseUrl}?q=${city}&appid=${API_CONFIG.weather.key}&units=${API_CONFIG.weather.units}&lang=${API_CONFIG.weather.lang}`;
  console.log(urlBase);
  const data = await fetchAPI(urlBase);

  const urlForecast = `${API_CONFIG.forecast.baseUrl}?q=${city}&appid=${API_CONFIG.weather.key}&units=${API_CONFIG.weather.units}&lang=${API_CONFIG.weather.lang}`;
  const forecast = await fetchAPI(urlForecast);

  if (data && forecast) {
    await loadInfo(dom, forecast, data);
  }
}

async function loadInfo(dom, forecast, data) {
  dom.cityName.textContent = `${data.name}, ${data.sys.country}`;
  dom.cityTemp.textContent = `${Math.round(data.main.temp)}º`;
  dom.weatherSky.textContent = data.weather[0].description;
  dom.weatherFeeling.textContent = `${Math.round(data.main.feels_like)}`;
  dom.cityHeight.textContent = `${Math.round(data.coord.lon)}`;
  dom.cityLatitude.textContent = `${Math.round(data.coord.lat)}`;

  const lat = data.coord.lat;
  const lon = data.coord.lon;

  const airUrl = `${API_CONFIG.air.baseUrl}?lat=${lat}&lon=${lon}&appid=${API_CONFIG.air.key}`;
  const airData = await fetchAPI(airUrl);



  if (airData?.list?.length) {
    const aqi = airData.list[0].main.aqi;
    dom.airNumber.textContent = aqi;
    dom.airBar.style.width = aqi * 20 + "%";
    if (aqi == 1){
        dom.airValue.textContent = "Excelente";
    } else if (aqi == 2){
        dom.airValue.textContent = "Buena";
    } else if (aqi == 3){
        dom.airValue.textContent = "Regular";
        dom.airValue.style.color = "#f0f05b";
        dom.airValue.style.background ="#4d4d3b";
    } else if (aqi == 4){
        dom.airValue.textContent = "Mala";
        dom.airValue.style.color = "#db7725";
        dom.airValue.style.background ="#4d433b";
    } else if (aqi == 2){
        dom.airValue.textContent = "Muy mala";
        dom.airValue.style.color = "#db2525";
        dom.airValue.style.background ="#4d2f2f";
    }

  } else {
    dom.airNumber.textContent = "—";
    dom.airBar.style.width = "0%";
  }

  

  const humidity = data.main.humidity;

  dom.humidityNumber.textContent = humidity + "%";
  dom.humidityBar.style.width = humidity + "%";

  const visibility = data.visibility / 1000;

  if (visibility >= 10) {
    dom.visibilityDescription.textContent = "Perfectamente visible";
  } else if (visibility >= 4) {
    dom.visibilityDescription.textContent = "Visibilidad regular";
  } else {
    dom.visibilityDescription.textContent = "Visibilidad mala";
  }

  dom.visibilityNumber.textContent = visibility;

  hourlyForecast(dom, forecast);
}

function hourlyForecast(dom, forecast) {
  dom.hoursContainer.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    const container = document.createElement("div");
    container.classList.add("hours");

    const hour = document.createElement("p");
    hour.classList.add("hour");

    let hora = Number(forecast.list[i].dt_txt.slice(11, 13));
    let time = "";

    if (hora > 12) {
      hora -= 12;
      time = "PM";
    } else if (hora === 12) {
      time = "PM";
    } else {
      time = "AM";
      if (hora === 0) hora = 12;
    }

    hour.textContent = `${hora} ${time}`;

    const weather = forecast.list[i].weather[0].main.toLowerCase();

    const icono = document.createElement("span");
    icono.classList.add("material-symbols-outlined", "fill", "icon");

    const icons = {
      clear: "sunny",
      clouds: "cloud",
      rain: "rainy",
      thunderstorm: "thunderstorm",
      snow: "ac_unit",
    };

    icono.innerText = icons[weather] || "help";

    const temp = document.createElement("p");
    temp.classList.add("degrees");
    temp.textContent = Math.round(forecast.list[i].main.temp) + "º";

    container.appendChild(hour);
    container.appendChild(icono);
    container.appendChild(temp);

    dom.hoursContainer.appendChild(container);
  }
}
