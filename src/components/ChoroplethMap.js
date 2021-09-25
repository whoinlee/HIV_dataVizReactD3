import React from 'react';
import { scaleSequential, interpolateYlOrRd, max } from 'd3';
import { useCodes } from '../utils/useCodes';
import { useData } from '../utils/useData';
import { useWorldAtlas } from '../utils/useWorldAtlas';
//-- Components
import Marks from './marks/Marks';
//-- Styles
import "../styles/ChoroplethMap.css";


const width=980;
const height=500;
const selectedYear="2017";

const ChoroplethMap = () => {
  const codes = useCodes();
  const data = useData();
  const worldAtlas = useWorldAtlas();
  
  if (!data || !worldAtlas || !codes) {
    return <pre>Loading ... </pre>
  }
  // console.log("ChoroplethMap :: worldAtlas.countries \n", worldAtlas.countries);
  // console.log("ChoroplethMap :: worldAtlas.interiors \n", worldAtlas.interiors);
  const numericCodeByAlphaCode = new Map();
  codes.forEach(code => {
    const alpha3Code = code['alpha-3'];
    const numericCode = code['country-code'];
    numericCodeByAlphaCode.set(alpha3Code, numericCode);
  })
  //-- leave only the data from selected year (2017, 231 items)
  const filteredData = data.filter(d => d.Year === selectedYear);
  // console.log("filteredData\n", filteredData);
  const rowByNumericCodes = new Map();
  filteredData.forEach(d => {
    const alpha3Code = d.Code;
    const numericCode = numericCodeByAlphaCode.get(alpha3Code);
    rowByNumericCodes.set(numericCode, d);
  })
  console.log("rowByCountry\n", rowByNumericCodes);

  const colorValue = d => d.aids;
  const colorScale = scaleSequential(interpolateYlOrRd)
    .domain([0, max(filteredData, colorValue)]);

  return ( 
    <div className="container">
      <svg width={width} height={height}>   
          <Marks  worldAtlas={worldAtlas}
                  rowByNumericCodes={rowByNumericCodes} 
                  colorScale={colorScale}
                  colorValue={colorValue}
          />
      </svg>
    </div>)
};

export default ChoroplethMap;
