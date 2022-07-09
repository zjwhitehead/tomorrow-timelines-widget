import React from 'react';
import './realtime.component.css';
import { Temp } from "./temp.component";
import { Wind } from "./wind.component";
import { WeatherIcon } from "./weather-icon.component";
import { prettyPrintWeatherCode } from "../utilities";
import { SunRiseSet } from "./sunriseset.component";

function Realtime({ realtime, sunrise, sunset }) {
    return (
        <div className="realtime">
            <div className="realtime-temp"><Temp value={realtime.intervals[0].values.temperature} /></div>
            <div className="realtime-temp-degrees">°F</div>
            <div className="realtime-extras">
                <div className="realtime-feels-like">Feels Like <Temp value={realtime.intervals[0].values.temperatureApparent} />°</div>
                <div className="realtime-humidity">Humidity <Temp value={realtime.intervals[0].values.humidity} />%</div>
                <div className="realtime-wind">Wind <Wind speed={realtime.intervals[0].values.windSpeed} gust={realtime.intervals[0].values.windGust} /></div>
            </div>
            <div className="realtime-icon">
                <WeatherIcon value={realtime.intervals[0].values.weatherCode} />
                <div className="realtime-weather-code">{prettyPrintWeatherCode(realtime.intervals[0].values.weatherCode)}</div>
            </div>
            <div className="sunriseset">
                <SunRiseSet isSunrise={true} time={sunrise}/>
                <SunRiseSet isSunrise={false} time={sunset} /> 
            </div>
        </div>
    );
}

export { Realtime };
