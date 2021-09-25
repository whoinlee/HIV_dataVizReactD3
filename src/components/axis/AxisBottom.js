import React from 'react';

const AxisBottom = ({xScale, innerHeight, tickFormat, tickOffset = 3}) => {
    return (
        xScale.ticks().map(tickValue => 
            <g className="tick bottom" key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
              <line 
                x1={0} y1={0}
                x2={0} y2={innerHeight} 
              />
              <text dy=".71em" y={innerHeight+tickOffset} style={{textAnchor:'middle'}}>{tickFormat(tickValue)}</text>
            </g>
        )
    );
};

export default AxisBottom;
