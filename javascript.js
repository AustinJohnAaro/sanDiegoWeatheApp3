

let currentCityTitle = $("#repo-search-term");
let temp = $("#temp");
let windSpeed = $("#windSpeed");
let humidity = $("#humidity")
"http"//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=43a92b3ec7857e2e1b45068a9ba0aedd
var response = "43a92b3ec7857e2e1b45068a9ba0aedd";
var response = "43a92b3ec7857e2e1b45068a9ba0aedd";
var APIKey = "43a92b3ec7857e2e1b45068a9ba0aedd";




function displayCurrentWeather() {
  

  
}

function displayDayForeCast() { 
  


}
//re set the citys weather display to emty //
function clearDisplayedWeatherInfo() {
  $("#current-weather-conditions").empty();
  $("#card-deck-title").remove();
  $(".card-deck").empty();
}


//intercep from submit sreaches for city in txt field //
$( "#city-form" ).submit(function( event ) {
    //alert( "Handler for .submit() called." );
    event.preventDefault();
    searchCity($("#city-search").val());
  });
  //search city function // 
  //calls open weather api at the vaule paased in at city name // 
function searchCity(cityName){

 console.log(cityName);
 var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + 
 cityName + "&APPID=43a92b3ec7857e2e1b45068a9ba0aedd&units=imperial"
console.log(queryURL)

 $.get(queryURL, function( data ) {
     console.log(data) 

  
     //clear display 

 //let h3=document,createElement = ("h3");
//  let newName,innerText = data.name 
//  let innrtText = data.name 
// // creat pharighragh element called newHumidity 
//  let newHumidity = data.main.humidity 
//  let  main,humidity  
// // creat pharighragh element called newtemp 
//  let newtemp = data.main.temp 
//  let ="#repos-container";
//  let element, container, appenendChild, NewHumidity, newTemp 

//  console.log = function(message) {
//   document.getElementById('result').innerHTML = message;
// };
// console.log('your result');
// const userAction = async () => {
//   const response =  fetch('https://api.openweathermap.org/data/2.5/weather?q=');
//   const myJson =  response.json(); //extract JSON from the http response
//   // do something with myJson
// }

// // var x = [1, 2, 3, 4, 5];
// let myBody 
// let  async 
  currentCityTitle.text(data.name) 
   temp.text(data.main.temp)
  windSpeed.text(data.wind.speed)
  humidity.text(data.main.humidity)
})}

