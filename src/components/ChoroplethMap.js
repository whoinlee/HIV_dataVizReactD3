import React from 'react';
import { scaleSequential, interpolateYlOrRd, max } from 'd3';
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
  const data = useData();
  const worldAtlas = useWorldAtlas();
  
  if (!data || !worldAtlas) {
    return <pre>Loading ... </pre>
  }
  // console.log("ChoroplethMap :: worldAtlas.countries \n", worldAtlas.countries);
  // console.log("ChoroplethMap :: worldAtlas.interiors \n", worldAtlas.interiors);

  //-- leave only the data from selected year (2017, 231 items)
  const filteredData = data.filter(d => d.Year === selectedYear);
  // console.log("filteredData\n", filteredData);
  const rowByCountry = new Map();
  filteredData.forEach(d => {
    rowByCountry.set(d.Entity, d);
  })
  console.log("rowByCountry\n", rowByCountry);

  const colorValue = d => d.aids;
  const colorScale = scaleSequential(interpolateYlOrRd)
    .domain([0, max(filteredData, colorValue)]);

  return ( 
    <div className="container">
      <svg width={width} height={height}>   
          <Marks  worldAtlas={worldAtlas}
                  rowByCountry={rowByCountry} 
                  colorScale={colorScale}
                  colorValue={colorValue}
          />
      </svg>
    </div>)
};

export default ChoroplethMap;
