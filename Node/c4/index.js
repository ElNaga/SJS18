const fs = require('fs');

fs.writeFile('iminja.txt', 'Janko, Petko, Stanko', (err) => {
    if (err) {
        console.log('Error: ', err);
    }
});


// const fileWrite = () => {

//     return new Promise(success, fail) => {

//     };
// };

const fileWrite = (filename, data) => {

    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

fileWrite('ocenki.txt', '4,5,6,4,3,2,3,4,2,3,4,5')
    .then(() => { //then == success
        console.log('Success!')
        return fileWrite('ocenki.txt', '4,5,6,4,3,2,3,4,2,3,4,5');
    }
    )
    .then(() => { //then == success
        console.log('Success 2!')
        return fileWrite('ocenki2.txt', '4,5,6,4,4,2,3,4,5');
    }
    )
    .catch(
        (err) => { // catch == fail
            console.log(err)
        }
    )

const main = async () => {
    try {
        await fileWrite('file1.txt', 'file one')
        await fileWrite('file2.txt', 'file two')
        await fileWrite('file3.txt', 'file three')
    } catch (err) {
        console.log(err)
    }
};



main();
// const fileRead = (filename) => {
//     return new Promise((success,fail) => { //resolve, reject
//         fs.readFile(filename, 'utf-8',(err,data) => {
//             if (err) {
//                 return fail(err);
//             }
//             return success(data);
//         });
//     });
// };

// fileRead('file1.txt')
//     .then ( (data) => {
//         console.log(data);
//     })
//     .catch();


//    ( async () => {
//         try {
//             let iminja = await fileRead('iminja.txt');
//             console.log(iminja)
//         } catch (err) {
//             console.log(err)
//         }
//     }) ();


let imenik = [
    { ime: 'Pero Perovski', telefon: '223305' },
    { ime: 'Stanko Stankovski', telefon: '223306' },
    { ime: 'Janko Jankovski', telefon: '223307' }
];

(async () => {
    try {
        let imenikData = JSON.stringify(imenik);
        await fileWrite('imenik.txt', imenikData);
        console.log(imenikData);
    } catch (err) {
        console.log(err);
    }
}) ();