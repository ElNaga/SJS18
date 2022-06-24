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


//F-ja 3
const checkFileExist = (file) => {
    return new Promise((success, fail) => {
        fs.access(file, constants.F_Ok, (err) => {
            return fail(err)
        }
        )
        return success();
    })
}



//F-ja 4
const append = (file, data) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, data, 'utf-8', (err) => {
            return fail(err)
        })
        return success();
    })
};



//F-ja 5
const watchF = (file) => {
    return new Promise((success, fail) => {
        fs.watch(file, (eventType, filename) => {
            console.log("\nThe file", filename, "was modified!");
            console.log("The type of change was:", eventType)
            return success(); //samo ednash kje se izvrshi mislam vaka, ama okej e za demonstracija samo
        })
    })
}


watchF('new2.txt');

// checkFileExist('new2.txt')
//     .then ( () => {
//         return streamWrite('new2.txt','content')
//     } )
//     .then ( () => {
//         return append('new2.txt',' for append')
//     })
//     .then( () => {
//         return streamRead('new2.txt')
//     });                                          // SO .THEN IMA ASINHRONO IZVRSHUVANJE


    const main = async () => {
        try {
            await checkFileExist('new2.txt')
            await streamWrite('new2.txt','content')
            await append('new2.txt',' for append')
            await streamRead('new2.txt')
        } catch (err) {
            console.log(err)
        }
    }; //SO TRY I AWAIT IMA SINHRONO IZVRSHUVANJE
    
main();


// watchF('new.txt')
//     .then(()=> {
//         checkFileExist('new.txt')
//     })
//     .then ( () => {
//         streamWrite('new.txt','content')
//     } )
//     .then ( () => {
//         append('new.txt','content for append')
//     })
//     .then( () => {
//         streamRead('new.txt')
//     })

