export const dashboardTemplate = `
<section class="dashboard-container">
        <div class="forecast card">

          <article class="city">
            <div class="city__name">
              <span class="icono"
                ><ion-icon name="location-sharp"></ion-icon
              ></span>
              <h2 class="name" id="city-name">Cargando...</h2>
            </div>

            <p class="date" id="date">Jueves, Enero 22</p>

            <span class="temp" id="city-temp"> -- </span>

            <div class="city__weather">
              <h2 class="sky" id="weather-sky">---</h2>
              <span class="separation"></span>
              <p class="feeling">
                Sensacion termica de <span id="weather-feeling">--</span>º
              </p>
            </div>

            <div class="city__coordinates">
              <p>H: <span id="height">--</span>º</p>
              <p>L: <span id="latitude">--</span>º</p>
            </div>
          </article>
          <aside class="visual">
            <div class="sun"></div>
            <span class="uv card">
              <span class="warning"><ion-icon name="warning"></ion-icon></span>
              <span id="uv-text">High UV</span>
            </span>
          </aside>
        </div>
        <article class="hourly card">
          <h2 class="title">Hourly Forecast</h2>
          <div class="hours-container">
            <div class="hours">
              <p class="hour" id="moment">Now</p>
              <span id="icon"><ion-icon name="sunny-sharp"></ion-icon></span>
              <p class="degrees" id="hours-temp">32º</p>
            </div>
            <div class="hours"></div>
            <div class="hours"></div>
            <div class="hours"></div>
            <div class="hours"></div>
            <div class="hours"></div>
            <div class="hours"></div>
            <div class="hours"></div>
          </div>
        </article>
      </section>

      <aside class="info">
        <article class="map"></article>
        <div class="info-weather">
          <div class="info-container">
            <article class="winfo card">
              <span class="inline">
                <span class="material-symbols-outlined secondary"> air </span>
                <p class="secondary">Calidad del aire</p>
              </span>

              <div class="weather-data">
                <p class="data-number" id="air-number">32</p>
                <span class="value" id="air-value"> Good</span>
              </div>

              <div class="bar-container">
                <div class="bar" id="air-bar"></div>
              </div>

            </article>

            <article class="winfo card">
              <span class="inline">
                <span class="material-symbols-outlined secondary">
                  brightness_empty
                </span>
                <p class="secondary">Rayos UV</p>
              </span>

              <div class="weather-data">
                <p class="data-number" id="uv-number">6</p>
                <span class="value" id="uv-value"> Good</span>
              </div>

              <div class="bar-container">
                <div class="bar" id="uv-bar"></div>
              </div>

            </article>
          </div>

          <div class="info-container">
            <article class="winfo card">
              <span class="inline">
                <span class="material-symbols-outlined secondary">
                  humidity_percentage
                </span>
                <p class="secondary">Humedad</p>
              </span>

              <div class="weather-data">
                <p class="data-number" id="humidity-number">6</p>
                <p class="small secondary">Punto de rocio</p>
              </div>

              <div class="bar-container">
                <div class="blue" id="humidity-bar"></div>
              </div>

            </article>

            <article class="winfo card">
              <span class="inline">
                <span class="material-symbols-outlined secondary">
                  visibility
                </span>
                <p class="secondary">Visibilidad</p>
              </span>

              <div class="weather-data">
                <p class="data-number" > <span id="visibility-number">10</span> KM</p>
                <p class="small secondary" id="visibility-description">Perfectamente claro</p>
              </div>

            </article>
          </div>
        </div>
      </aside>`