import React from 'react';
import './hourly.component.css';
import { formatTime } from "../utilities";
import { Temp } from "./temp.component";
import { Wind } from "./wind.component";
import { WeatherIcon } from "./weather-icon.component";

function Hourly({ hourly }) {
    return (
        <div key="hourly" className="hourly">
            {hourly.intervals.map((hour, index) => (
                <div key={index} className="hour">
                    <div key="hour-time" className="hour-time">{formatTime(hour.startTime)}</div>
                    <div key="hour-icon" className="hour-icon"><WeatherIcon value={hour.values.weatherCode} /></div>
                    <div key="hour-temp" className="hour-temp"><Temp value={hour.values.temperature} />°</div>
                    <div key="hour-temp" className="hour-temp"><Wind speed={hour.values.windSpeed} />mph</div>
                </div>
            ))}
        </div>
    );
}

export { Hourly };
