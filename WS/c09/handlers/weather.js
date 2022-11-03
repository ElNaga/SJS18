const fetch = require('node-fetch')
const key = require('../APIcode.json')


    let localCache = null;
    let cacheTime = null;
    
const getCity = async (req, res) => {
    let APIkey = key.APIcode;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${APIkey}`

    let caches = [{}];


    if (cacheTime !== null && cacheTime + (600 * 1000) < new Date().getTime()) {
        localCache = null;
    }

    // let weather = null;

    if (localCache === null) {
        let data = await (fetch(url));
        localCache = await data.json();
        cacheTime = new Date().getTime(); //vrakja unix vreme 
    }

    // let data = await (fetch(url));
    // weather = await data.json()
    console.log(localCache);
    return res.send(localCache);
}

module.exports= {
    getCity
}