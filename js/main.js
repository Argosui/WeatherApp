console.log("main cargado");

import { navDom } from "./dom/navDom.js";
import { loadDashboard } from "./pages/dashboardPage.js";

document.addEventListener("DOMContentLoaded", () => {
  const { dashboard, pronostico, guardados } = navDom();

  dashboard.addEventListener("click", loadDashboard);
});

loadDashboard();