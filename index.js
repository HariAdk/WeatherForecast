const apiKey="3a9a7308bb2e1ea35998b07f08bb06c9";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

const searchBox=$(".search input");
const searchBtn=$(".search button");
var started=false;
if(!started)                                                       //to not display weather without write city name.....change css also
{
    var city="delhi";
    checkWeather(city)
}
async function checkWeather(city)
{
 const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
 var data= await response.json();
 if(response.status==404)
 {
    $(".error").css("display","block")
    setTimeout(function()
    {
$(".error").css("display","none");
    },500)
    searchBox.val("");                       //if wrong city..written city will removed
 }
 console.log(data);
 $(".city").text(data.name);
$(".temp").text(Math.round(data.main.temp)+"°c");
$(".humidity").text(data.main.humidity+"%");
$(".wind").text(data.wind.speed+" km/h");
$(".weather-icon").attr("src", "weather/" + data.weather[0].main + ".png");
searchBox.val("");   
// $(".weather").css("display","block");                                                 //to not display weather without write city name.....change css also

}

searchBtn.on("click", function() {
    
    // console.log(inputValue);
    // console.log(searchBox.val());                                                  //for js use console.log(searchBox.value)
    const inputValue = searchBox.val();
    if (inputValue) {
        started=true;
        // $(".weather").css("display","block");                                    //to not display weather without write city name.....change css also
      checkWeather(inputValue);
    } else {
      var data = "delhi";
      checkWeather(data);
    }
  });
  
  // Keypress event handler
  $("body").keypress(function(event) {
    if (event.key === "Enter") {
      const inputValue = searchBox.val();
      if (inputValue) {
        started=true;
        // $(".weather").css("display","block");                                  //to not display weather without write city name.....change css also
        checkWeather(inputValue);
      } else {
        var data = "delhi";
        checkWeather(data);
      }
    }
});




