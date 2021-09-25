import React from 'react';

const AxisLeftS = ({yScale, innerWidth}) => {
    return (
      yScale.ticks().map(tickValue => 
        <g  className="tick left" key={tickValue} 
            transform={`translate(0, ${yScale(tickValue)})`}>
          <line x2={innerWidth} />
          <text key={tickValue} dy=".32em" 
                x={-4} 
                style={{textAnchor:'end'}}>{tickValue}</text>
        </g>
      )
    );
};

export default AxisLeftS;
