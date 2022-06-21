// console.log('test')
// console.log(1233)
// console.log(true)
// console.log('test','test2')
// console.log({
//     a: 'test1',
//     b: 'test2'
// })


// a = 10;
// var b = 20;
// let c = 10;
// const d = 40;

// const student = {
//     ime: 'Pero',
//     prezime: 'Perovski'
// }

// var student1 = {
//     ime: 'Pero',
//     prezime: 'Perovski'
// }

// student.ime = 'Janko'
// student1.brak = 'bret'
// console.log(student1.brak)


function transform(stepeni, option) {
    switch (option) {
        case 1:
            return ((stepeni - 32) * 5 / 9);


        case 2: //co faranhajt
            return ((stepeni * 1.8) + 32);

        default:
            console.log('Pogreshna opcija')
            break;
    }
}

console.log(transform(0, 2))

//ime na f-ja, option da bide string