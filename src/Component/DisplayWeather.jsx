import React from "react";


function DisplayWeather(props) {
  const { data } = props;
  const iconurl ="http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";


 


  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}. Weather
            </span>
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <img className="weather-icon" src={iconurl} alt="weatherlogo" />
            <span className="weather-description">
            </span>
          </div>
         
                <div className='more_info'>


                <span> Min/Max Temprature : {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}</span>


              <span> Humidity : {data.main.humidity} %</span>

              <span> Pressure : {data.main.pressure} hPa</span>
              
              <span> Visiblity : {data.visibility / 1000} Km</span>

              <span> Wind Speed : {Math.floor((data.wind.speed * 18) / 5)} km/hr</span>

              <span> Wind Direction : {data.wind.deg} <sup>o</sup> deg</span>
                      
              <span> Sunrise : {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span>

              <span> sunset : {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
                      
                    


                </div>
              


          
        </>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;