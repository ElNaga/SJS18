const fetch = require('node-fetch')
const key = require('../APIcode.json')


// let localCache = null;
// let cacheTime = null;
const caches = [{
    city: '',
    cache: null,
    cacheTime: null
}];
// const acaches = [{
//     city: req.params.city,
//      let data = await (fetch(url));
//  cache = await data.json();
//     cacheTime:  new Date().getTime(); //vrakja unix vreme 
// }];

const getCity = async (req, res) => {
    let APIkey = key.APIcode;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${APIkey}`

    // if (!caches[0]) {
    //     let city = req.params.city;
    //     let data = await (fetch(url));
    //     let cache = await data.json();
    //     let cacheTime = new Date().getTime();
    //     let toPushObj = {
    //         city,
    //         cache,
    //         cacheTime
    //     }
    //     caches.push(toPushObj);
    //     console.log(caches)
    //     return res.send(caches[0].cache)
    // }
    console.log(caches, '------------------------------------------------------------------')

    let cities = caches.map(a => a.city);
    console.log(cities, 'this is cities')

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
            // console.log(caches, '----------this is end of elsein first if---------------', caches[1].city, req.params.city)
            return res.send(toPushObj.cache)
        }
    } else {
        for (let i = 0; i <= caches.length; i++) {
            console.log(caches[i])
            if (caches[i].city === req.params.city) {
                if (caches[i].cacheTime !== null && caches[i].cacheTime + (600 * 1000) < new Date().getTime()) {

                    caches[i].cache = null;
                    let data = await (fetch(url));
                    caches[i].cache = await data.json();
                    caches[i].cacheTime = new Date().getTime();

                    return res.send(caches[i].cache)
                } else {
                    return res.send(caches[i].cache)
                }
            } else {
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
                console.log(caches, '----------this is end of else---------------', caches[1].city, req.params.city)
                return res.send(caches[i + 1].cache)
            }
        }
    }

}




// if (cacheTime !== null && cacheTime + (600 * 1000) < new Date().getTime()) {
//     localCache = null;
// }

// // let weather = null;

// if (localCache === null) {
//     let data = await (fetch(url));
//     localCache = await data.json();
//     cacheTime = new Date().getTime(); //vrakja unix vreme 
// }

// let data = await (fetch(url));
// weather = await data.json()
// console.log(localCache);
// return res.send(localCache);
// }

module.exports = {
    getCity
}