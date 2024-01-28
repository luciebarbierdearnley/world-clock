function showTime(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let currentCityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${currentCityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${currentCityTime.format(
            "h:mm:ss"
          )}<small>${currentCityTime.format("A")}</small></div>
        </div>`;
}

function refreshTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let laCurrentDay = moment().tz("America/Los_Angeles").format("MMMM Do YYYY");
  let laCurrentTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = laCurrentDay;
  losAngelesTimeElement.innerHTML = laCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let NewYorkElement = document.querySelector("#new-york");
  let NewYorkDateElement = NewYorkElement.querySelector(".date");
  let NewYorkTimeElement = NewYorkElement.querySelector(".time");

  let nyCurrentDay = moment().tz("America/New_York").format("MMMM Do YYYY");
  let nyCurrentTime = moment().tz("America/New_York");

  NewYorkDateElement.innerHTML = nyCurrentDay;
  NewYorkTimeElement.innerHTML = nyCurrentTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}

refreshTime();
setInterval(refreshTime, 1000);

let chooseCity = document.querySelector("#select-city");
chooseCity.addEventListener("change", showTime);
