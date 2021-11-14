let weather = {
    apiKey: "125464226e49514db2154d4dc35cc75a",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        // document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/hr";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})
// function newFunction () {
//     return "125464226e49514db2154d4dc35cc75a";
// }
// { "coord": { "lon": -104.9847, "lat": 39.7392 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 274.54
//, "feels_like": 274.54, "temp_min": 271.33, "temp_max": 280.88, "pressure": 1022, "humidity": 59 }, "visibility": 10000, "wind": { "speed": 0.45, "deg": 184, "gust": 0.89 }, "clouds": { "all"
//, "sys": { "type": 2, "id": 2004233, "country": "US", "sunrise": 1636897431, "sunset": 1636933514 }, "timezone": -25200, "id": 5419384, "name": "Denver", "cod": 200 }
weather.fetchWeather("South Hadley")