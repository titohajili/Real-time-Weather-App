'use strict';

const api_key = 'f9d3ff082b0c60a4db5d66ac86c5132a';

/*  Fetch data from surver*/ 
export const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}
