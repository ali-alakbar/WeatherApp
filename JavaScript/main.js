// ====================
//   Start The Object
// ====================
const weather = {
  //  ============= API Key =============
  apiKey: "0067d86bf6bb4db36fc3b5cda752cca0",

  // ============= Start Function One =============
  //  A function To Take A City Argument And Utilize In The URL
  fetchURL: async function (city) {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    );
    const data = await res.json();
    // Calling the Following Function
    // It means that after the parameter have excuted and the city selected .. then,
    // I need to display the information of the city.
    this.display(data);
  },
  // ============= End Function One =============
  // ============= Start Function Two =============
  //  A Function To Replace The HTML Elements' Value With The API's Values
  //  And Display These Values.
  display: function (data) {
    // I need the name of the city, the cloud, the degree, the humidity and the wind
    const { name } = data;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { icon, description } = data.weather[0];
    const { country } = data.sys;
    console.log(name, temp, humidity, speed, icon, description);

    // Call The Required HTML Elements And
    // Insert The HTML Element With The API Value.
    const cityName = (document.querySelector(".cityName #name").innerHTML =
      name);

    const countryName = (document.querySelector(".countryName").innerHTML =
      country);
    const cityTemp = (document.querySelector(".degree span").innerHTML = temp);
    const cityHumidity = (document.querySelector(".humidity span").innerHTML =
      humidity + "%");
    const cityWind = (document.querySelector(".wind span").innerHTML =
      speed + "km/h");
    const cityCloud = (document.querySelector(".cloud").innerHTML =
      description);
    const imgIcon = (document.querySelector("#myImg").src =
      "https://openweathermap.org/img/wn/" + icon + ".png");
  },
  // ============= End Function Two =============
  // ============= Start Function Three =============
  // A Function To Activate and Enable The HTML Input.
  search: function () {
    // Call the input value
    let inputValue = document.querySelector(".search").value;
    // Call the function fetchURL and add inputValue to it as a parameter.
    this.fetchURL(inputValue);
  },
  // ============= End Function Three =============
};
// ====================
//   End The Object
// ====================

// ====================
//  Start Enable/Activate The Button
// ====================
// When Click On Button, The Function Of Search.
// Create A Function To Call Search Fucntion inside the Object
let btn = document.querySelector(".myBtn");
btn.addEventListener("click", () => {
  weather.search();
});
// When Click Enter, Implement The Function Of Search.
let input = document.querySelector(".search");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    weather.search();
  }
});
// Default Weather Location.
weather.fetchURL("basra");

// ====================
//  Start Enable/Activate The Button
// ====================

function reloading() {
  document.querySelector(".weather-content .myform .search").value = "";
}
reloading();

// ====================
//  End Clear Input Field On reloading The Page.
// ====================

// ====================
//  End Clear Input Field On reloading The Page.
// ====================
