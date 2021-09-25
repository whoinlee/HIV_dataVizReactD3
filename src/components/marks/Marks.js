import React from 'react';
// import {useMemo} from 'react';
import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';


const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();
const missingDataColor = '#ccc';
const Marks = ({ 
    worldAtlas: { countries, interiors },
    rowByNumericCodes,
    colorScale,
    colorValue}) => {
        return (<g className="marks">
                <path className="sphere" d={path({ type: 'Sphere' })} />
                <path className="graticules" d={path(graticule())} />
                {countries.features.map((feature, i) => {
                    //-- feature.properties.name === country name
                    const d = rowByNumericCodes.get(feature.id);
                    return <path key={i}
                                 fill={d? colorScale(colorValue(d)) : missingDataColor}  
                                 d={path(feature)} />
                })}
                <path className="interiors" d={path(interiors)} />
            </g>)
};

export default Marks;