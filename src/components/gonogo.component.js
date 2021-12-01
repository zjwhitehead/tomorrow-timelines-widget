import React from 'react';
import './gonogo.component.css';
import { formatTime } from "../utilities";
import { Temp } from "./temp.component";
import { Wind } from "./wind.component";

function Gonogo({ hourly }) {

    return (
        <div key="gonogo" className="gonogo">
        </div>
    );
}

export { Gonogo };
