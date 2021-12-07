import React from 'react';
import './gonogo.component.css';
import { formatTime } from "../utilities";

function Gonogo({ values }){
    function flyable(values){
        console.log(values);

        if (values.temperature > 60 && values.windSpeed < 10 &&
            values.windGust < 15 && values.precipitationIntensity < 20){
            return 'Go';
        }
        else{
            return 'Stay';
        }
    }

    return (
        <div key="gonogo" className="gonogo">
            <div className="gonogo-results">{flyable(values)}</div>
        </div>
    );
}

export { Gonogo };
