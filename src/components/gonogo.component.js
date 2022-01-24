import React from 'react';
import './gonogo.component.css';
import { formatTime } from "../utilities";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Gonogo({ values }){
    function flyable(values){
        if (values.temperature > 60 && values.windSpeed < 10 &&
            values.windGust < 15 && values.precipitationIntensity < 20){
            return ['far', 'check-circle']
        }
        else{
            return ['fas', 'times']
        }
    }

    return (
        <div key="gonogo" className="gonogo">
            <div className="gonogo-results"><FontAwesomeIcon icon={flyable(values)} size="2x" /></div>
        </div>
    );
}

export { Gonogo };
