import axios from "axios"
import { useEffect, useState } from "react"
import "../assets/css/Cities.css"
import { api } from "../constants/api"

export const Cities = () => {

    const [weather, setWeather] = useState()
    const [city, setCity] = useState("")
    const mode = "json"



    const searchWeather = () => {
        
        axios.get(`${api.base}/weather?q=${city}&mode=${mode}&units=metric&appid=${api.key}`)
        .then( res => {
            setWeather(res.data)
        })
    }

    return (
        // <div
        // dangerouslySetInnerHTML={{__html: weather}}>
        // </div>
        <div className={weather ? (weather.main.temp > 15) ? "cities warm" : "cities cold" : "cities"}>
            <div className="search-box">
                <input
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            searchWeather()
                        }

                    }}
                    type="text"
                    placeholder="Search Cities"
                    className="search-bar"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button

                    onClick={searchWeather}
                    className="search-button"
                >
                    Search
                </button>

            </div>
            {weather && 
                <div className="location-contaier">
                    <div className="location-box">
                        <div className="location">
                            {weather.name}, {weather.sys.country}
                        </div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)} &#8451;
                        </div>
                        <div className="weather">
                            {weather.weather[0].main}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}