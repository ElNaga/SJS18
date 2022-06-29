// 2 prashanja: kako sme nie kako grupa vo sporedba so drugi grupi
// jas najdov praksa devops, i ja prifativ. komentar?

const http = require('http');

const server = http.createServer((req,res) => {

    //console.log(req)
    console.log('server test');
    res.end('zdravo od serverot'); // isprati odgovor i zatvoranje na povikot
    console.log(req.url);
    console.log(req.method);

});

server.listen(8080);

/*
192.168.1.20 - IP Adresa (Internet Protocol Address)
0.0.0.0 - 255.255.255.255 //A,B,C,D klasi na IP adresi

Provider --------> Router -------> Computer (N)
                            NAT (Network Address Trasnlation)

                                computer ima edna ip adresa koja mu e dadena od Router-ot
                    routerot ima IP adresa koja mu e dadena od provider-ot


port 80 - http
port 443 - https

perimer: wikipedia.org raboti na DE3FAULT port 80
http://wikipedia.org

NO, lokalen servis (server) raboti na nestandardna porta (10000)
http://localhost:10000

default ports:

- web server application 80, 443
- ftp server application: 21
- ssh server application: port 22
- smtp server application: port 25
- proxy server application: 8080
- ....

server - компјутер поврзан на интернет
server application / service - аликација која е поставена на server (и работи на споствена порта)

-------------------

Како функционира HTTP

req - request - повик од клиент према сервер 
res - response - одговорот што серверот го испраќа према клиентот
*/

// Domashno

// Ako nekoj vnese i otvori url
/*
    http://local:10000/plus/2/3 req.url
    sakam da mi vrati rezultat 5 req.end

    Ako nekoj vnese i otvori url
    http://local:10000/minus/10/2
    sakam da mi vrati rezultat 8   

    ..slicna implemetnacija za mnozenje i delenje

*/