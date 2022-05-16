import React from 'react';
import './app.component.css';
import { Realtime } from "./realtime.component";
import { Hourly } from "./hourly.component";
import { useTimeline } from "../hooks/use-weather.hook";
import TomorrowIcon from '../icons/tomorrow-icon.svg';
import PinIcon from '../icons/pin.svg';
import { addHours } from "../utilities";

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
    const [timelineResponse, timelineLoading, timelineHasError] = useTimeline({
        apikey, lat, lon, startTime, endTime
    });

    if (timelineLoading) {
        return <Loading />;
    }

    if (timelineHasError) {
        return <Error />;
    }

    const realtimeResponse = timelineResponse.data.timelines[1];

    const hourlyResponse = timelineResponse.data.timelines[0];

    return (
        <div className="app-root">
            <div className="date">{now.toDateString()} <span className="time">{now.toLocaleTimeString()}</span></div>
            <div className="location">
                <img className="icon location-icon"
                     src={PinIcon}
                     alt={location}
                     title={location} />
                {location}
            </div>
            <Realtime realtime={realtimeResponse} />
            <div className="divider" />
            <Hourly hourly={hourlyResponse} />
        </div>
    );
}

export { App };
