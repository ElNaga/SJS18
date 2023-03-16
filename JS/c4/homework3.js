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


function changeText () {

    const element = document.getElementById('title')
    const list = document.createElement('ul')
    
    element.appendChild(list)
    
    
    
    
    for (let book of books) {
        let listItem = document.createElement('li')
        listItem.textContent = book.name + ' ('+book.year+')'+' by '+ book.author
        list.appendChild(listItem)
    }
}
