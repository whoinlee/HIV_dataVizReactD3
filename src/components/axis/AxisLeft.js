import React from 'react';

const AxisLeft = ({yScale}) => {
    return (
      yScale.domain().map(tickValue => 
        <g className="tick left" key={tickValue} >
          <text key={tickValue} dy=".32em" 
                x={-6} 
                y={yScale(tickValue) + yScale.bandwidth()/2}
                style={{textAnchor:'end'}}>{tickValue}</text>
        </g>
      )
    );
};

export default AxisLeft;
