// logicki iskazi i uslovno izvrshuvanje na kod, logicki operatori

console.log("Test")

//">" "<" ">=" "=<" "!" "==" "!="

const a = Number(prompt("Vnesi prva vrenost")), b = Number(prompt("Vnesi vtora vrenost"));

if (/*uslov*/ a < b) {
    // kod shto ke se ispolni dokolku uslovot e ISPOLNET
    console.log(a + ' e pomalo od ' + b)
} else if (a > b) {
    // kod shto ke se izvrshi dokolku uslovot ne e ispolnet
    console.log(a + ' e pogolemo od ' + b)
} else {
    console.log(a + ' e ednakvo so ' + b)
}


const broj1 = 7
const broj2 = 20


// && logichko i
// || logichko ili
if ((broj1 < broj2) && (broj1 < 10)) {
    console.log('brojot e ednocifren')
}


// tocno ako vo username ima bilo kakva vrednost


const username = prompt("Vnesete korisnicko ime")
const password = prompt("Vnesete password!")
if (username) {

}
if (!password) {
    console.log("Pasvordot e nevalider")
}

