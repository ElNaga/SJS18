const http = require('http');

const server = http.createServer((request, response) => {
    console.log('server test');
    //response.end('zdravo od serverot'); // isprati odgovor i zatvoranje na povikot
    console.log(request.url);
    //console.log(request.method);
    let res = checkAndDoOperation(request.url);
    response.end(res.toString())
});

server.listen(8080)

const checkURL = (url) => {
    console.log(url, 'The data type of URL in node is', typeof (url))
};

const checkAndDoOperation = (string) => {
    //stringot e vo forma na url so / znaci
    // kje go stavam vo array i kje proveram dali ima tekst od tipot plus minus itn

    let arrayOfUrl = string.split('/');
    //console.log(arrayOfUrl)
    if (!isNaN(arrayOfUrl[2]) && !isNaN(arrayOfUrl[3])) {
        switch (arrayOfUrl[1].toLowerCase()) {
            case 'plus':
                return Number(arrayOfUrl[2]) + Number(arrayOfUrl[3]);
            case 'minus':
                return Number(arrayOfUrl[2]) - Number(arrayOfUrl[3]);
            case 'mnozenje':
                return Number(arrayOfUrl[2]) * Number(arrayOfUrl[3]);
            case 'delenje':
                return Number(arrayOfUrl[2]) / Number(arrayOfUrl[3]);
            default:
                return 'Pogreshna operacija';
        }

    } else {
        return 'Greshka! Ne e vnesen broj za operacija.'
    }


};