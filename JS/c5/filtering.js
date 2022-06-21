const books = [

    {
        name: 'Crime and punishment',
        author: 'Fyodor Dostoyevski',
        year: '1887',
        read: true
    },

    {
        name: 'harry potter',
        author: 'J. K. Rowling',
        year: '2000',
        read: false
    },

    {
        name: 'The art of war',
        author: 'sun Tzu',
        year: '200',
        read: false
    },

    {
        name: 'The Hobbit',
        author: 'JRR Tolkein',
        year: '1910',
        read: true
    }

]

// const displayBooks = (isRead) => {
//     //function display books

//     const content = document.getElementById('content')

//     let check = document.getElementById("ulBooks")
//     if (check) {
//         check.remove()
//     }

//     const list = document.createElement('ul')
//     list.id = 'ulBooks'
//     list.style = "padding: 0px; list-style-type: none;";
//     content.appendChild(list)
    


//     for (let book of books) {
//         if (isRead === book.read) {
           
//             const listItem = document.createElement('li');
//             listItem.textContent = book.name
//             list.append(listItem)
//         }
//     }

// }


function filterBooksByYear () {

    //immutability concept
    const filteredBooks = books.filter( (book) => {
        //callback function (predicate)
        //vo callback func definirame uslov
        // filter ja lista nizata i za sekoj element proveruva dali go zadovoluva uslovot
        // site elementi sto go zadovoluvaat uslovot, im pravi RETURN
        if (book.year < 2000){
         return true
        }    
        return false
    }
    )

    console.log(filteredBooks)
}


// const modifiedBooks = books.map((book,index) => {
//     return { ...book,id: index, read:true}
// }
// )
// console.log(modifiedBooks)


function generateList (arrayOfBooks) {


    const content = document.getElementById('content')

    let check = document.getElementById("ulBooks")
    if (check) {
        check.remove()
    }

    const list = document.createElement('ul')
    list.id = 'ulBooks'
    list.style = "padding: 0px; list-style-type: none;";
    content.appendChild(list)
    


    for (let book of arrayOfBooks) {
        if (isRead === book.read) {
           
            const listItem = document.createElement('li');
            listItem.textContent = `${book.name} ${book.year} by ${book.author}`
            list.append(listItem)
        }
    }

}


const displayBooks = (isRead)=> {
    generateList(books.filter((book) => book.read === isRead ? true : false))
}