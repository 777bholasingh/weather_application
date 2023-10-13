
const inputBox=document.querySelector('.inpt');
const searchBtn = document.getElementById('searchBtn');
const  weatherimg=document.querySelector('.weather-img');
 const  temprature=document.querySelector('.temp');
const description=document.querySelector('.description');
const  humid=document.querySelector('.humidity');
const   wind=document.querySelector('.windspeed');
const location_not_found=document.querySelector('.location-not-found');
const  weatherbody=document.querySelector('.weather');



async  function checkWeather(city){
  // const api_key = "4a277270e895f0608f89708b77ad93db";
  //   const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  //    const response = await fetch(url+city+`&appid=${api_key}`);
  //           const wdata= await response.json();
  //    console.log(wdata);
  const api_key = "0bbc26b5869812c4d3261c7dd9ae6e19";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const wdata = await fetch(`${url}`).then(response => response.json());
    console.log(wdata);
    if(wdata.cod===`404`)
  {   alert("You have Not Entered Correct City Name!!")
     location_not_found.style.display="flex";
     weatherbody.style.display="none";
     console.log("error");
     return;
   
  }

          temprature.innerHTML=Math.round(wdata.main.temp)+"°C";
          description.innerHTML=wdata.weather[0].description;
          humid.innerHTML=wdata.main.humidity+"%";
         wind.innerHTML=wdata.wind.speed+"km/h";

         if(wdata.weather[0].main=="Clouds"){
         weatherimg.src="weather-app-img/images/clouds.png";}
         else if(wdata.weather[0].main =='Mist'){
         weatherimg.src="weather-app-img/images/mist.png";}
         else if(wdata.weather[0].main == 'Snow'){
         weatherimg.src="weather-app-img/images/snow.png";}
         else if(wdata.weather[0].main == 'drizzle'){
         weatherimg.src="weather-app-img/images/drizzle.png";}
         else if(wdata.weather[0].main == 'Clear'){
         weatherimg.src="weather-app-img/images/clear.png";}
         else if(wdata.weather[0].main == 'Rain'){
          weatherimg.src="weather-app-img/images/rain.png";}
          else if(wdata.weather[0].main == 'Haze'){
            weatherimg.src="weather-app-img/images/haze.png";}
                     
      
          }

         
        searchBtn.addEventListener('click',()=>{

          checkWeather(inputBox.value) ; 
  
        });





