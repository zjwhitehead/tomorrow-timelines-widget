import React from 'react';
import './app.component.css';
import { Realtime } from "./realtime.component";
import { Hourly } from "./hourly.component";
import { useTimeline } from "../hooks/use-weather.hook";
import { useSunrise } from "../hooks/use-sunrise.hook";
import Moment from 'react-moment';
import PinIcon from '../icons/pin.svg';
import { addHours } from "../utilities";
import { isFlyableTime } from "../utilities";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faCheckCircle, faTimes);

const now = new Date();
const startTime = now.toISOString();
const endTime = addHours({ date: now, hours: 48 }).toISOString();

function Loading() {
    return <div>Loading...</div>;
}

function Error() {
    return <div>Oops! Something went wrong :( - Please check params</div>;
}

function App({ apikey, lat, lon, location }) {
    const [sunriseResponse, sunriseLoading, sunriseHasError] = useSunrise({
        lat, lon
    });

    const [timelineResponse, timelineLoading, timelineHasError] = useTimeline({
        apikey, lat, lon, startTime, endTime
    });

    if (timelineLoading || sunriseLoading) {
        return <Loading />;
    }

    if (timelineHasError || sunriseHasError) {
        return <Error />;
    }

    const sunriseResults = sunriseResponse.results;

    const realtimeResponse = timelineResponse.data.timelines[1];
    const hourlyResponse = timelineResponse.data.timelines[0];

    const twilight_begin = new Date(sunriseResults.civil_twilight_begin);
    const twilight_end = new Date(sunriseResults.civil_twilight_end);

    const sunrise = new Date(sunriseResults.sunrise);
    const sunset = new Date(sunriseResults.sunset);

    const hourlyData = hourlyResponse.intervals.filter(hour => isFlyableTime(hour.startTime,twilight_begin,twilight_end));

    return (
        <div className="app-root">
            <div className="flex-grid-thirds">
                <div className="col"><Moment date={now} format="ddd MMM Do, h:mm a"></Moment> 
                    <div className="location">
                    <img className="icon location-icon" src={PinIcon} alt={location} title={location} />
                        {location}
                </div></div>
            </div>
            <Realtime realtime={realtimeResponse} sunrise={sunrise} sunset={sunset} />
            <div className="divider" />
            <Hourly hourly={hourlyData} />
        </div>
    );
}

export { App };
