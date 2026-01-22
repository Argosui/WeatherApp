export const API_CONFIG = {
  weather: {
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    key: "e32598b9b6603519918abc5842ae9410",
    units: "metric",
    lang: "es"
  },
  forecast: {
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast",
    key: "e32598b9b6603519918abc5842ae9410",
    units: "metric",
    lang: "es"
  }
};

export async function fetchAPI(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
