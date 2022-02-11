import React from 'react';


const refreshPage = ()=>{
    window.location.reload();
 }



function Forecast({forecast}) {
    
   var allDays =[]; 
    
   var str = forecast.Headline.Link;
   for(var i =0; i < 5; i++){
    str = str.substring(str.indexOf("/") + 1);
   }
   str=str.substring(0,str.indexOf("/"));
   
   var city =str.toUpperCase();
   console.log(city);

    var weatherDay = [], minTemperature = [], maxTemperature= [], weatherText= [], weatherIcon= [];
    
    
    for (var i = 1; i < 5; i++) {
         allDays[i]=[forecast.DailyForecasts[i].Date, forecast.DailyForecasts[i].Temperature.Minimum.Value,forecast.DailyForecasts[i].Temperature.Maximum.Value, forecast.DailyForecasts[i].Day.IconPhrase, forecast.DailyForecasts[i].Day.Icon ];
         var date = forecast.DailyForecasts[i].Date;
         allDays[i][0]=String(date).substring(0, 10);
    };

    console.log(allDays);

    weatherDay = forecast.DailyForecasts[0].Date;
    minTemperature = forecast.DailyForecasts[0].Temperature.Minimum.Value;
    maxTemperature= forecast.DailyForecasts[0].Temperature.Maximum.Value;
    weatherText = forecast.DailyForecasts[0].Day.IconPhrase;
    weatherIcon = forecast.DailyForecasts[0].Day.Icon;
    

    var image ='/assets/' + weatherIcon + '.png';
    
        
    var date = String(weatherDay).substring(0, 10);
  




       
  return (
  

    
    <div className="d-flex weather-card">
      
        <div className></div>
        <div className></div>
        <div className={` d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1"> {city}</p>
                <p className="mb-0">Date: {date}</p>
                
            </div>
            <div>
               
                <h2 className="font-weight-bold mb-1">
                  <div>
                    <span>Max Temp: {maxTemperature}</span>°C
                  </div>
                  <div>
                    <span>Min Temp: {minTemperature}</span>°C
                  </div>
                 
                </h2>
                <img src={image}></img>
                <h5 className="font-weight-lighter">{weatherText}</h5>
            </div>
            <div className='close'>
            <button type="button" class="btn-primary-outline " onClick={refreshPage} >
              <img src={'/assets/close.png'} class="close-button"></img>
            </button>
            </div>
            
        </div>
      
   
  


            


  </div>
     
      
    
    
  )
}



export default Forecast;

