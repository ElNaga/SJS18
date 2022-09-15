import axios from "axios"
import { api } from "../constants/api"
import { useState } from "react"
import "../assets/css/Weather.css"

export const Weather = () => {

    
    const [weather, setWeather] = useState()

    const getWeatherInfo = (selectedCity) => {
        axios({
            url : `${api.base}/forecast?q=${selectedCity}&units=metric&appid=${api.key}`,
            method : "GET"
        })
        .then(res => {
            setWeather(res.data)
        })
        .catch (err => {
            alert(err)
        })
    }

    return (
        <div className="local-weather">
            <br />
            <div className="header_buttons">
                <button
                    onClick={ () => getWeatherInfo("Skopje")}
                    className="cityButton"
                >
                    Skopje!
                </button>
                <button
                    onClick={ () => getWeatherInfo("Bitola")}
                    className="cityButton"
                >
                    Bitola!
                </button>
                <button
                    onClick={ () => getWeatherInfo("Prilep")}
                    className="cityButton"
                >
                    Prilep!
                </button>
                <button
                    onClick={ () => getWeatherInfo("Berlin")}
                    className="cityButton"
                >
                    Berlin!
                </button>
                <div className="local-container">
                    {weather && weather.list.map(w => {
                        return (
                            <div key={w.dt} className='card'>
                                <div className="location-box">
                                    <div className="location">
                                        {weather.city.name}, {weather.city.country}
                                    </div>
                                    <div className="date">
                                            {w.dt_txt}
                                    </div>
                                </div>
                                <div className="weather-box">
                                    <div className="temp">
                                        {Math.round(w.main.temp)}°C
                                    </div>
                                    <div className="weather">
                                        {w.weather[0].main}
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}