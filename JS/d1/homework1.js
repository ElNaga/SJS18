// Calculator zadaca


alert('Startuvana programa: Calculator')

let znak = prompt('Vnesete operacija: ( +   -   /   *   %(ostatok) )')
let a = Number(prompt('Vnesete prv broj: '))
let b = Number(prompt('Vnesete vtor broj: '))
let result = 0;

switch (znak) {
    case '+':
        result = a+b
        console.log('Rezultatot za ' + a + ' + ' + b + ' e: ' + result)
        break;
    case '-':
        result=a-b
        console.log('Rezultatot za ' + a + ' - ' + b + ' e: ' + result)
        break;
    case '/':
        result = a/b
        console.log('Rezultatot za ' + a + ' / ' + b + ' e: ' + result)
        break;
    case '*':
        result = a*b
        console.log('Rezultatot za ' + a + ' * ' + b + ' e: ' + result)
        break;
    case '%':
        result = a%b
        console.log('Rezultatot za ' + a + ' % ' + b + ' e: ' + result)
        break;

    default:
        console.log('Vnesovte nevaliden znak za operacija!')
        break;
}

