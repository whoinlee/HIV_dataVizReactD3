import React from 'react';

const ColorLegend = ({ colorScale, 
    tickSpacing=20, 
    tickSize=10,
    tickTextOffset=20,
    onHover,
    hoveredValue,
    fadeOpacity }) => 
colorScale.domain().map((val, i) => (
        <g  key={i} className="tick colorlegend" 
            transform={`translate(0, ${i*tickSpacing})`}
            onMouseEnter={()=>{onHover(val)}}
            onMouseOut={()=>{onHover(null)}}
            opacity={hoveredValue && val !== hoveredValue ? fadeOpacity : 1}>
            <circle fill={colorScale(val)} r={tickSize}/>
            <text x={tickTextOffset} dy=".32em">{val}</text>
        </g>
    )
);

export default ColorLegend;