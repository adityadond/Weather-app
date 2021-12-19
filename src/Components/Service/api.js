import axios from "axios";



const URL='https://api.openweathermap.org/data/2.5/weather'
const API_KEY='c3b154f177d98e7a034efa8eefbc3a4d'
export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}




//
//
//c3b154f177d98e7a034efa8eefbc3a4d

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}