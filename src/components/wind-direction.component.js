import React from 'react';
import { getIcon } from "../icons";

function WindDirection({ rotation }) {
    const rotationNum = Number.parseFloat(rotation);

    let rotationStyle = {
        transform: `rotate(${rotationNum.toFixed(0)}deg)`,
        height: '20px'
      }
    return (
        <img src={getIcon('arrow')} alt='arrow-icon' title='arrow' style={rotationStyle}/>
    );
}

export { WindDirection };
