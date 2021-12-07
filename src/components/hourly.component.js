import React from 'react';
import './hourly.component.css';
import { formatTime } from "../utilities";
import { Temp } from "./temp.component";
import { Wind } from "./wind.component";
import { WeatherIcon } from "./weather-icon.component";
import { WindDirection } from "./wind-direction.component";
import { Gonogo } from "./gonogo.component";

function Hourly({ hourly }) {
    return (
        <div key="hourly" className="hourly">
            {hourly.intervals.slice(0, 7).map((hour, index) => (
                <div key={index} className="hour">
                    <div key="hour-time" className="hour-time">{formatTime(hour.startTime)}</div>
                    <div key="hour-icon" className="hour-icon"><WeatherIcon value={hour.values.weatherCode} /></div>
                    <div key="hour-temp" className="hour-temp"><Temp value={hour.values.temperature} />°</div>
                    <div key="hour-wind" className="hour-wind"><Wind speed={hour.values.windSpeed} gust={hour.values.windGust}/></div>
                    <div key="hour-wind-dir" className="hour-wind-dir"><WindDirection rotation={hour.values.windDirection} speed={hour.values.windSpeed} /></div>
                    <div key="hour-gonogo" className="hour-gonogo"><Gonogo values={hour.values} /></div>
                </div>
            ))}
        </div>
    );
}

export { Hourly };
