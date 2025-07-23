const apiKey = '740368b1cabbae7ffc289ac4fbb61c62';
const lat = -23.5505; // São Paulo latitude
const lon = -46.6333; // São Paulo longitude
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const currentCard = document.querySelector('#current-weather');
    const forecastCard = document.querySelector('#forecast-weather');

    // Current Weather
    const current = data.list[0];
    const temp = current.main.temp.toFixed(1);
    const description = current.weather[0].description;

    currentCard.innerHTML = `
        <h3>Current Weather</h3>
        <p><strong>${temp}°F</strong> - ${description}</p>
    `;

    // 3-Day Forecast (12:00:00 timestamps)
    const forecastDays = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    const forecastHTML = forecastDays.map(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const dayTemp = day.main.temp.toFixed(1);
        return `<p><strong>${dayName}:</strong> ${dayTemp}°F</p>`;
    }).join('');

    forecastCard.innerHTML = `
        <h3>3-Day Forecast</h3>
        ${forecastHTML}
    `;
}

getWeather();
