import React from 'react';
import { getIcon } from "../icons";
import Moment from 'react-moment';
import './sunriseset.component.css';

function SunRiseSet({ isSunrise, time }) {
    const iconName = isSunrise ? 'sunrise' : 'sunset';

    return (
    <div className="item">
        <img height="50px" src={getIcon(iconName)} alt={iconName}/>

        <p className="sunriseset-time">
        <Moment format="h:mm a">{time}</Moment></p>
    </div>
    );
}

export { SunRiseSet };
