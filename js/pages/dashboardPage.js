import { dashboardTemplate } from "../appTemplates/dashboard.js";
import { dashboardDom } from "../dom/dashboarddom.js";

export function loadDashboard() {
    const app = document.querySelector(".container");

    app.innerHTML = dashboardTemplate

    const dom = dashboardDom(app);
}
