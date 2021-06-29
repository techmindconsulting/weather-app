import * as env from "./config.js";

const form = document.querySelector(".top-banner form");
const list = document.querySelector(".result-section .cities");

document.addEventListener("DOMContentLoaded", () => {
    fetch(`${env.config.API_URL_IPIFY}?format=json`)
        .then((response) => response.json())
        .then((json) => {
            fetch(`${env.config.API_GEOIP.API_URL}/${json.ip}?access_key=${env.config.API_GEOIP.API_KEY}`)
                .then((response) => response.json())
                .then((json) => {
                    const url = `${env.config.API_WEATHER.API_URL}?q=${json.city}&appid=${env.config.API_WEATHER.API_KEY}&units=metric`;
                    fetch(url)
                        .then((response) => response.json())
                        .then((data) => {
                            const { main, name, sys, weather } = data;
                            const icon = `${env.config.ICONS_URL}/${weather[0]["icon"]}@2x.png`;
                            const li = document.createElement("li");
                            li.classList.add("city");
                            const markup = `
                            <h2 class="city-name" data-name="${name},${sys.country}">
                                <span>${name}</span>
                                <sup>${sys.country}</sup>
                            </h2>
                            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                            <figure>
                                <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
                                <figcaption>${weather[0]["description"]}</figcaption>
                            </figure>`;
                            li.innerHTML = markup;
                            list.appendChild(li);
                        })
                });
        });
});

form.addEventListener("submit", (e) => {
    // l'action par defaut qui est de raffraichir la page ne sera pas executer
    // https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault
    e.preventDefault();
});
