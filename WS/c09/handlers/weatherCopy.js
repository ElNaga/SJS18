const fetch = require('node-fetch')
const key = require('../APIcode.json')



const caches = [];

const getCity = async (req, res) => {
    let APIkey = key.APIcode;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${APIkey}`
    const cty = () => (req.params.city);
    if (!caches[0]) {
        let city = req.params.city;
        let data = await (fetch(url));
        let cache = await data.json();
        let cacheTime = new Date().getTime();
        let toPushObj = {
            city,
            cache,
            cacheTime
        }
        caches.push(toPushObj);
        return res.send(caches[0].cache)
    }

    let cities = caches.map(a => a.city);
    if (!cities.includes(req.params.city)) {
        {
            let city = req.params.city;
            let data = await (fetch(url));
            let cache = await data.json();
            let cacheTime = new Date().getTime();
            let toPushObj = {
                city,
                cache,
                cacheTime
            }
            caches.push(toPushObj);
            return res.send(toPushObj.cache)
        }
    } else {
        for (let i = 0; i < caches.length; i++) {
            if (caches[i].city === req.params.city) {
                if (caches[i].cacheTime !== null && caches[i].cacheTime + (60 * 1000) < new Date().getTime()) {

                    caches[i].cache = null;
                    let data = await (fetch(url));
                    caches[i].cache = await data.json();
                    caches[i].cacheTime = new Date().getTime();

                    return res.send(caches[i].cache)
                } else {
                    return res.send(caches[i].cache)
                }
            }

        }
    }
}




module.exports = {
    getCity
}