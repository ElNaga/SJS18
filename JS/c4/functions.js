function HelloWorl(parametar1, parametar2) {
   // alert(parametar1+parametar2)
}

const changeText = () => {
    //ova e DOM Objekt!!!!!!!!!! site funkcii za manipulacija na HTML elementi
    const element = document.getElementById('title')
    console.log(element)
    element.textContent = element.textContent + 'My first JS made title'

    const list = document.createElement('ul')
    
    const listItem = document.createElement("li")
    listItem.textContent = "Hello World!"

    list.appendChild(listItem)
    element.appendChild(list)
}


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
