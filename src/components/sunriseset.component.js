import React from 'react';
import { getIcon } from "../icons";
import './sunriseset.component.css';

function SunRiseSet({ isSunrise, time }) {
    const iconName = isSunrise ? 'sunrise' : 'sunset';

    return (
    <div className="item">
        <img height="50px" src={getIcon(iconName)} alt={iconName}/>

        <span className="sunriseset-time">{time}</span>
    </div>
    );
}

export { SunRiseSet };
