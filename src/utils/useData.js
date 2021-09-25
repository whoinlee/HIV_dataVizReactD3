// import React from 'react';
import { useState, useEffect } from 'react';
import { csv } from 'd3';


const csv_url = "https://gist.githubusercontent.com/whoinlee/1bfd682d588b2f40aa5f7d6f9a0721a8/raw/share-of-population-infected-with-hiv-ihme.csv";

const col = d => {
    d.aids = +d['Prevalence - HIV/AIDS - Sex: Both - Age: 15-49 years (Percent)'];
    return d;
}

export const useData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        csv(csv_url, col).then(setData);
    }, []);

    return data;
}
