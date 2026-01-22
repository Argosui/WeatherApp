console.log("main cargado");

import { navDom } from "./dom/navDom.js";
import { loadDashboard } from "./pages/dashboardPage.js";

document.addEventListener("DOMContentLoaded", () => {
  const { dashboard, pronostico, guardados, buscador } = navDom();

  buscador.addEventListener("keydown", function(e) {
    if (e.key === "Enter"){
      const city = buscador.value;
      loadDashboard(city);
    }
    
  });

  dashboard.addEventListener("click", loadDashboard);

  
});

const city = "mazatlan";
loadDashboard(city);