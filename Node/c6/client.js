// 2 prashanja: kako sme nie kako grupa vo sporedba so drugi grupi
// jas najdov praksa devops, i ja prifativ. komentar?

//http klient e Browser! klientska aplikacija

import fetch from 'node-fetch';

(async () => {
    try {
        let res = await fetch('https://wikipedia.org');
        let wipikedpiaContent = await res.text();
        //console.log(wipikedpiaContent)

        let blogRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        let blogData =  await blogRes.json();
        console.log(blogData)
    } catch (error) {
        console.log(error)
    }
})();