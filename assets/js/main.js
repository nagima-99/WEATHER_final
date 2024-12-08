

// fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });


// const map = L.map('map').setView([51.16, 71.43], 10); // Координаты поменять не те взяты 
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// // Получение погоды
// const WEATHER_API_KEY = 'YOUR_WEATHER_API_KEY'; // Скачать ключ OpenWeatherMap
// navigator.geolocation.getCurrentPosition(async (position) => {
//     const { latitude, longitude } = position.coords;
//     const response = await fetch("
//         https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}
//     ")
//     const data = await response.json();
//     document.getElementById('weather-data').innerText =
//         Temperature: ${data.main.temp}°C, ${data.weather[0].description};
// });

// // Получение курсов валют вроде тот код
// const CURRENCY_API_URL = 'https://open.er-api.com/v6/latest/USD'; // Пример API
// fetch(CURRENCY_API_URL)
//     .then((response) => response.json())
//     .then((data) => {
//         const fromSelect = document.getElementById('from-currency');
//         const toSelect = document.getElementById('to-currency');
//         Object.keys(data.rates).forEach((currency) => {
//             fromSelect.innerHTML += <option value="${currency}">${currency}</option>;
//             toSelect.innerHTML += <option value="${currency}">${currency}</option>;
//         });
//         document.getElementById('currency-form').addEventListener('submit', (e) => {
//             e.preventDefault();
//             const amount = document.getElementById('amount').value;
//             const from = fromSelect.value;
//             const to = toSelect.value;
//             const result = (amount / data.rates[from]) * data.rates[to];
//             document.getElementById('conversion-result').innerText = 
//                 ${amount} ${from} = ${result.toFixed(2)} ${to};
//         });
//     });

