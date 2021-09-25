import { useState, useEffect } from 'react';
import { csv } from 'd3';


const csv_url = "https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/slim-3/slim-3.csv";

export const useCodes = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        csv(csv_url).then(setData);
    }, []);

    return data;
}
