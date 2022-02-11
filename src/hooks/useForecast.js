import { useState } from 'react';
import axios from 'axios';



const BASE_URL = 'http://dataservice.accuweather.com/';
const API_KEY = 'apikey=kl9E3G8gQx1Z3ydiLZDu5EOfGo1LJOtc';

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);
   

    const getlocationKey = async location => {
        const a = location;
        const { data } = await axios(`${BASE_URL}/locations/v1/cities/search?${API_KEY}&q=${a}`);
        console.log(`${BASE_URL}/locations/v1/cities/search?${API_KEY}&q=${a}`);
        if (!data || data.length === 0) {
            setError('Invalid search. Please try again.');
            setLoading(false);
            return;
        }
        //console.log(Object.values(data[0])[1]);  5 day results
        return Object.values(data[0])[1];
        
    };
            //133328 helsinki key
    const getForecastData = async locationKey => {
        const { data } = await axios(`${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?${API_KEY}&metric=true`);
    
        return data;
    };



    const submitRequest = async location => {
        setLoading(true);
        setError(false);

        const response = await getlocationKey(location);

        const data = await getForecastData(response);
        if (!data) return;

        setLoading(false);

        setForecast(data);
        
       
    };
    

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
   
};

export default useForecast;
