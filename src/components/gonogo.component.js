import React from 'react';
import './gonogo.component.css';
import { formatTime } from "../utilities";
import { Temp } from "./temp.component";
import { Wind } from "./wind.component";

function Gonogo({ hourly }) {
    function isFlyable(temp, wind, gust, visibility, precipitationProbability) {
        if (temp > 60 && wind < 10 && gust < 10) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div key="gonogo" className="gonogo">
            <div className="gonogo-morning"></div>
            <div className="gonogo-evening"></div>
        </div>
    );
}

export { Gonogo };
