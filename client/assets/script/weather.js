const locationName = document.querySelector('#location-name');
const locationRegion = document.querySelector('#location-region');
const logo = document.querySelector('#weather-logo');
const temp = document.querySelector('#temp');

const apiUrl = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const apiRequestParams = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "6014873574msh44e7ad0f82ee65dp1c7e95jsndb53108b4b4d",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
    }
};

fetch(apiUrl + "Metz", apiRequestParams).then((response) => {
    if (response.ok) {
        response.json().then((data) => {
            locationName.textContent = data.location.name;
            locationRegion.textContent = data.location.region + ", " + data.location.country;
            logo.src = data.current.condition.icon;
            temp.innerHTML = data.current.temp_c + "<span class='fs-5'>°C</span>";
        });
    }
});