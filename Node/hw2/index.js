const { constants } = require('buffer');
const fs = require('fs');


//F-ja 1
const streamWrite = (path, data) => {
    return new Promise((success, fail) => {
        let filePath = fs.createWriteStream(path)
        filePath.write((data), (error) => {
            if (error) {
                return fail(error);
            }
            return success();
        })
    }
    )
};

(async () => {
    try {
        await streamWrite('ime.txt', 'Aleksandar');
    } catch (error) {
        console.log(error)
    }
})();

streamWrite('prezime.txt', 'Ilijevski')
    .then(() => {
        console.log('Successfull stream write--')
    })
    .catch((err) => console.log(err));



//F-ja 2    
const streamRead = (path) => {
    return new Promise((success, fail) => {
        let reader = fs.createReadStream(path, 'utf-8')
        reader.on('data', (chunk) => {
            console.log(chunk);

        })
        return success()
        // ne znam kako da 'izvadam' error bidejki ovie funkcii vnatre nemaat metod koj vrakja error...
    })
};

(async () => {
    try {
        await streamRead('ime.txt')
    } catch (error) {
        console.log(error)
    }
})(); //catch error nema poenta... vo ovaa situacija. 

streamRead('prezime.txt')
    .then(() => {
        console.log('Successfull stream read')
    })
    .catch((err) => console.log(err)); //ova nema poenta bidejki nikade ne se pushta vrednosta za error vo funkcijata


//F-ja 3
const checkFileRW = (file) => {
    return new Promise((success, fail) => {
        fs.access(file, constants.R_OK | constants.W_OK, (err) => {
            return fail(err)
        }
        )
        return success();
    })
}

checkFileRW('ime.txt')
    .then(() => {
        console.log('File "ime.txt" is readable and writable')
    })
    .catch((err) => { console.log(err) });

(async () => {
    try {
        await checkFileRW('prezime.txt')
        console.log('Readable and writabe "prezime.txt"')
    } catch (error) {
        console.log(error)
    }
})();


//F-ja 4
const append = (file, data) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, data, 'utf-8', (err) => {
            return fail(err)
        })
        return success();
    })
};

append('ulica.txt', ' Leninova')
    .then(() => {
        console.log('File ime.txt has been appended')
    })
    .catch((err) => { console.log(err) });

(async () => {
    try {
        await append('ulica.txt', ' broj 6')
        console.log('File prezime.txt has been appended')
    } catch (error) {
        console.log(error)
    }
})();  //najverojatno poradi asinhronost na f-ciite dokolku se obidam da gi 'append'-nam ime.txt i prezime.txt, ne dozvoluva. racing? idk

//F-ja 5
const watchF = (file) => {
    return new Promise((success, fail) => {
        fs.watch("ulica.txt", (eventType, filename) => {
            console.log("\nThe file", filename, "was modified!");
            console.log("The type of change was:", eventType)
            return success(); //samo ednash kje se izvrshi mislam vaka, ama okej e za demonstracija samo
        })
    })
}

watchF('ulica.txt')
    .then(() => {
        console.log('Watcher activated from .then')
    })
    .catch((err) => { console.log(err) });

(async () => {
    try {
        await watchF('prezime.txt')
        console.log('File prezime.txt has been modified  - try-catch watcher - ')
    } catch (error) {
        console.log(error)
    }
})(); 