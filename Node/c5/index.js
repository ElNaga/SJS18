const fs = require('fs');

let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata)

let highestAvgStd = {};
let lowestAvgStd = {};
let avgAvg = 0;
let highestAvgCity = '';
let lowestAvgCity = '';
let studentNew_AvgSort = [];
let studentNew_NameSort = [];

// const highestAvgStd = (student) => {
//     for (let i = 0; i < student.length; i++) {
//         let result = {};

        
//     }    
// }
let avg = 0;
let sum = 0;
for (let i = 0; i < student.length; i++) {
    sum = sum +student[i].prosek;
    if (student[i].prosek>avg)
    {
        avg = student[i].prosek;
        highestAvgStd = student[i]
    }
}

for (let i = 0; i < student.length; i++) {
    
    if (student[i].prosek<avg)
    {
        avg = student[i].prosek;
        lowestAvgStd = student[i]
    }
}
avgAvg = sum / student.length;

console.log(highestAvgStd)
console.log(lowestAvgStd)
console.log(avgAvg)
console.log(highestAvgCity)
console.log(lowestAvgCity)