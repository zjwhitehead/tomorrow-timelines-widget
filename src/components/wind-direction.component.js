import React from 'react';
import { getIcon } from '../icons';

function WindDirection({ rotation, speed }) {
    const rotationNum = Number.parseFloat(rotation);
    const speedNum = Number.parseFloat(speed) || 1; // default to 1 if speed is not a number or is 0
    const speedSize = 1 + speedNum.toFixed(0) / 10;

    let rotationStyle = {
        transform: `rotate(${rotationNum.toFixed(0)}deg)`,
        height: `${speedSize}rem`,
    };
    return (
        <img
            src={getIcon('arrow')}
            alt="arrow-icon"
            title="arrow"
            style={rotationStyle}
        />
    );
}

export { WindDirection };
