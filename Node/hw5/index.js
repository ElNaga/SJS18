const http = require('http');
const url = require('url');
const fs = require('fs');

const fileRead = (filename) => {
    return new Promise((success, fail) => { // resolve, reject
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};


const pages = {
    '/': async (req, res) => {
        let content = await fileRead('./index.html');

    },
    "/plus": async (request, res) => {
        let queryOfUrl = url.parse(request.url, true).query;
        let [operator, _] = request.url.split('?');
        let result = Number(queryOfUrl['a']) + Number(queryOfUrl['b']);
        let content = await fileRead('./index.html');
        let newContent = content.split('<span>');
        let withResult = newContent[0] + '<span>' + result + newContent[1];
        res.end(withResult);
    },
    "/minus": async (request, res) => {
        let queryOfUrl = url.parse(request.url, true).query;
        let [operator, _] = request.url.split('?');
        let result = Number(queryOfUrl['a']) - Number(queryOfUrl['b']);
        let content = await fileRead('./index.html');
        let newContent = content.split('<span>');
        let withResult = newContent[0] + '<span>' + result + newContent[1];
        res.end(withResult);
    },
    "/mnozenje": async (request, res) => {
        let queryOfUrl = url.parse(request.url, true).query;
        let [operator, _] = request.url.split('?');
        let result = Number(queryOfUrl['a']) * Number(queryOfUrl['b']);
        let content = await fileRead('./index.html');
        let newContent = content.split('<span>');
        let withResult = newContent[0] + '<span>' + result + newContent[1];
        res.end(withResult);
    },
    "/delenje": async (request, res) => {
        let queryOfUrl = url.parse(request.url, true).query;
        let [operator, _] = request.url.split('?');
        let result = Number(queryOfUrl['a']) / Number(queryOfUrl['b']);
        let content = await fileRead('./index.html');
        let newContent = content.split('<span>');
        let withResult = newContent[0] + '<span>' + result + newContent[1];
        res.end(withResult);
    },

}

const server = http.createServer((req, res) => {

    // url vo forma /plus?a=10&b=5    OK
    // ** probaj import na fajlot od hw4 za funcijata so digitronot;
    //1. parse na request.url;
    //2.  razdeli go stringot so querry-to vo promenlivi (f-ja);
    //3. tuka povikuvash kalkulator so elementite od parsot;
    //4. ispecati vo span element vo HTML fajl

    // let queryOfUrl = url.parse(request.url, true).query;
    // let [operator,_] = request.url.split('?');
    // let result = calculate(operator,queryOfUrl);
    // response.end('end')
    let [path, _] = req.url.split('?');
    if (pages[path]) {
        pages[path](req, res);
    } else {
        res.end('');
    }

    //file read


























});


























server.listen(8080);

const calculate = (operator, arrVar) => {

    if (!isNaN(arrVar[0]) && !isNaN(arrVar[1])) {
        switch (operator.toLowerCase()) {
            case 'plus':
                return (arrVar[0]) + (arrVar[1]);
            case 'minus':
                return (arrVar[0]) - (arrVar[1]);
            case 'mnozenje':
                return (arrVar[0]) * (arrVar[1]);
            case 'delenje':
                return (arrVar[0]) / (arrVar[1]);
            default:
                return 'Pogreshna operacija';
        }

    } else {
        console.log(arrVar[1])
        return 'Greshka! Ne e vnesen broj za operacija.';
    };


};