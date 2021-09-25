import React, {useMemo} from 'react';
import { scaleSqrt, max } from 'd3';
//-- Components
import MigrantsMapMarks from '../marks/MigrantsMapMarks';


const sizeValue = d => d['Total Dead and Missing'];
const maxRadius = 15;

const BubbleMap = ( {data, filteredData, worldAtlas} ) => {
    const sizeScale = useMemo(() => scaleSqrt()
      .domain([0, max(data, sizeValue)])
      .range([0, maxRadius]), [data]);

    return (
        <MigrantsMapMarks
            worldAtlas={worldAtlas}
            data={filteredData}
            sizeScale={sizeScale}
            sizeValue={sizeValue}
        />
    )
}

export default BubbleMap

