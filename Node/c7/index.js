//case ide direktno na imeto shto mu treba!!! najbrzo pri biranje povekje opcii

//vidishto e parse

const http = require('http');
const fs = require('fs');
const url = require('url');

const student = {
    ime: 'Pero',
    prezime: 'Perovski', //vo ime na properti bukva, brojka, dolna crta_ i dolar$
    'horoskopski znak': 'frizider',
    
}

let p = 'ime'
console.log(student['horoskopski znak'])

const fileRead = (filename) => {
    return new Promise((success,fail) => { //resolve, reject
        fs.readFile(filename, 'utf-8',(err,data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const pages = {
    '/': async (req,res) => {
        console.log(url.parse(req.url,true));
        let content = await fileRead('./index.html');
        res.end(content);
    },
    '/home': (req,res) => {
        res.end('Home2!')
    },
    '/users': (req,res) => {
        res.end('Users!')
    }
};




const server = http.createServer((request, response) => {
    //querystring parameters qs

    const [path, _]= request.url.split('?');

    if (pages[path]) {
        pages[path](request, response);
    } else {
        response.end('');
    }
});

server.listen(8080)