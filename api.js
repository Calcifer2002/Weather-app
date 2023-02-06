
function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    inputVal +
    "&units=metric&appid=" +
    "c5dda0e64c3540521e0ff7ddb089bd78")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  
    document.getElementById("city").innerHTML = inputVal;
   

    const { temp, feels_like, pressure } =
    data.main;
    document.getElementById("pres").innerHTML = "Pressure:" + pressure;
    document.getElementById("temp").innerHTML = "Temperature:" + temp;
    document.getElementById("feel").innerHTML = "Feels like:" + feels_like;
    
});
}