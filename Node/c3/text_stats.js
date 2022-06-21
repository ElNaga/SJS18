let stats = {
    bukvi: 0,
    zborovi: 0,
    recenici: 0,
    gt5: 0,
    lt5: 0,
    eq5: 0
}


function textStats(text) {
    //vrati br na bukvi, br na zborovi, br na recenici,zborovi so povekje od 5 karakteri, kolku zborovi se so pomalku od 5 karakteri i kolku se so tocno 5 karakteri

    //return objekt: {bukvi: 12, zborovi: 3, recenici: 1, gt5: 4, lt5: 7, eq5: 7}

    //nema proverka string

    stats.bukvi = text.length;

    arrZborovi = text.split(' ');

    stats.zborovi = arrZborovi.length;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '.') {
            stats.recenici++;
        }


    }

    for (let i = 0; i < arrZborovi.length; i++) {

        if (arrZborovi[i].length > 5) {
            stats.gt5++;
        }
        if (arrZborovi[i].length > 5) {
            stats.gt5++;
        }
        if (arrZborovi[i].length > 5) {
            stats.gt5++;
        }
    }

}


textStats('Aleksandar Ilijevski uci programiranje.')
console.log(stats)