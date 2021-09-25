import React from 'react';
import { max } from 'd3';
import { scaleSqrt } from 'd3-scale';
import { useGeoData2 } from '../utils/useGeoData2';
import { useCityData } from '../utils/useCityData';
//-- Components
import MapMarks2 from './marks/MapMarks2';
//-- Styles
import "../styles/WorldMapWithCities.css";


const width=980;
const height=560;

const WorldMapWithCities = () => {
  const data = useGeoData2();
  const cityData = useCityData();

  if (!data || !cityData) {
    return <pre>Loading ... </pre>
  } 
  // console.log("data\n", data);
  // console.log("colorData\n", colorData);
  const sizeValue = d => d.population;
  const maxRadius = 15;
  const sizeScale = scaleSqrt()
                    .domain([0, max(cityData, sizeValue)])
                    .range([0, maxRadius]);
  return ( 
    <div className="container">
      <svg width={width} height={height}>   
          <MapMarks2  data={data} cities={cityData}
                      sizeScale={sizeScale} sizeValue={sizeValue}/>
      </svg>
    </div>)
};

export default WorldMapWithCities;
