const http = require('http');
const url = require('url');
const fs = require('fs');
const parse = require('node-html-parser').parse;

const server = http.createServer( (request,response) => {

    // url vo forma /plus?a=10&b=5    OK
    // ** probaj import na fajlot od hw4 za funcijata so digitronot;
    //1. parse na request.url;
    //2.  razdeli go stringot so querry-to vo promenlivi (f-ja);
    //3. tuka povikuvash kalkulator so elementite od parsot;
    //4. ispecati vo span element vo HTML fajl

    let queryOfUrl = url.parse(request.url, true).query;
    //console.log(Object.values(queryOfUrl)[0]);
    let [operator,_] = request.url.split('?');
    let result = calculate(operator,queryOfUrl);
   
    fs.readFile('index.html', 'utf8', (err,html)=>{
        if(err){
           throw err;
        }
     
        const root = parse(html);
     
        const span = root.querySelector('span');
        //body.set_content('<div id = "asdf"></div>');
        span.append(result);
     
    
    // const createSpanResElement = (res) => {
    //     let htmlSpan = document.getElementsByTagName('span');
    //     htmlSpan.innerText = res
        
    // };
    // response.end(createSpanResElement(result))

} );}
)
server.listen(8080);

const calculate = (operator,arrVar) => {

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
        return 'Greshka! Ne e vnesen broj za operacija.';
    };


};