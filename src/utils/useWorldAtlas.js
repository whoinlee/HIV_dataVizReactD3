import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature, mesh } from 'topojson-client';


const data_url = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

export const useWorldAtlas = () => {
    const [data, setData] = useState(null);

    // console.log("data,\n", data);
    useEffect(() => {
        json(data_url).then(topology => {
            const {countries} = topology.objects;
            setData({
                countries: feature(topology, countries),
                interiors: mesh(topology, countries, (a, b) => a !== b)
            });
        });
        
    }, []);

    return data;;
}
