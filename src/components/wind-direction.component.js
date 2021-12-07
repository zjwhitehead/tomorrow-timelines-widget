import React from 'react';
import { getIcon } from "../icons";

function WindDirection({ rotation, speed }) {
    const rotationNum = Number.parseFloat(rotation);
    const speedSize = 1 + (Number.parseFloat(speed).toFixed(0)/10);

    let rotationStyle = {
        transform: `rotate(${rotationNum.toFixed(0)}deg)`,
        height: `${speedSize}rem`
      }
    return (
        <img src={getIcon('arrow')} alt='arrow-icon' title='arrow' style={rotationStyle}/>
    );
}

export { WindDirection };
