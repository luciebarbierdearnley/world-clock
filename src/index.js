//function showTime(event) {

//}

//let chooseCity = document.querySelector("#cities");
//chooseCity.addEventListener("change", showTime);

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
    "h:mm:ss [<small>]A[</small>]"
  );
}

refreshTime();
setInterval(refreshTime, 1000);
