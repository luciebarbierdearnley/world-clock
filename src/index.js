function showTime(event) {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let laCurrentDay = moment().tz("America/Los_Angeles").format("MMMM Do YYYY");
  let laCurrentTime = moment().tz("America/Los_Angeles").format("h:mm:ss A");

  if (event.target.value === "Los Angeles") {
    losAngelesDateElement.innerHTML = laCurrentDay;
    losAngelesTimeElement.innerHTML = laCurrentTime;
  }
}

let chooseCity = document.querySelector("#cities");
chooseCity.addEventListener("change", showTime);
