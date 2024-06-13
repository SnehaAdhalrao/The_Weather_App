
const APIKEY = "394ec5f0a8693a373e408b4062f76a38";
const APIURL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${APIKEY}&q=`;
const searchtext = document.querySelector(".search-text input");
const searchbtn = document.querySelector(".search-icon button");
const mainimg = document.querySelector(".main-img");
const getdata = async (city) => {
    let response = await fetch(APIURL + city);
    let data = await response.json();
    console.log(data);
    if (response.status == 200) {
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";
    if (data.weather[0].main == "Clouds") {
        mainimg.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        mainimg.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        mainimg.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        mainimg.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
        mainimg.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Snow") {
        mainimg.src = "images/snow.png";
    }




}
searchbtn.addEventListener(
    "click", () => {
        getdata(searchtext.value);
    }
)

