// const Person = {
//     pol: 'maski',
//     vozrast: 20,
//     visina: 180,
//     tezina: 100,
//     student: true
// }
// const nov = Person
// const nov2= {...Person}
// console.log(Person.pol)

// delete Person.tezina
// Person.ime = 'Alek' //person['ime'] = 'Alek'


// console.log(Person)
// console.log(nov)
// console.log(nov2)
// Object.values


// const Kvadrat = {
//     sirina: 10,
//     dolzina: 20
// }

// Kvadrat.plostina = Kvadrat.sirina * Kvadrat.dolzina
// console.log(Kvadrat)

// const books = [

//     {
//         name: 'Crime and punishment',
//         author: 'Fyodor Dostoyevski',
//         year: '1887',
//         read: true
//     },

//     {
//         name: 'harry potter',
//         author: 'J. K. Rowling',
//         year: '2000',
//         read: false
//     },

//     {
//         name: 'The art of war',
//         author: 'sun Tzu',
//         year: '200',
//         read: false
//     },

//     {
//         name: 'The Hobbit',
//         author: 'JRR Tolkein',
//         year: '1910',
//         read: true
//     }

// ]

// for (let i = 0; i < books.length; i++) {
//     (books[i].read) && console.log(books[i].name) // shorthand za IF 
    
// }

// for (let book of books) {
//     if(book.read == true){
//         console.log(book.name)
//     }
// }

const students = [
    {
        id: 1,
        name: 'Alek',
        grades: {
            math: 6,
            physics: 7,
            chemistry: 8,
        }
    },
    {
        id: 2,
        name: 'Kela',
        grades: {
            math: 8,
            physics: 10,
            chemistry: 9,
        }
    },
    {
        id: 3,
        name: 'sanja',
        grades: {
            math: 10,
            physics: 10,
            chemistry: 9,
        }
    }
    
]

let avgMath = Number(0); avgPhy = 0; avgChem = 0;


for (let i = 0; i < students.length; i++) {
    avgMath = avgMath + students[i].grades.math
    avgChem = avgChem + students[i].grades.chemistry
    avgPhy = avgPhy + students[i].grades.physics
}

avgMath = avgMath/Object.keys(students[1].grades).length
avgChem = avgChem/Object.keys(students[1].grades).length
avgPhy = avgPhy/Object.keys(students[1].grades).length

console.log(students[1].grades.length)


console.log(avgMath)





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

const element = document.getElementById('title')
    console.log(element)
    element.textContent = element.textContent + 'My first JS made title'

for (let i = 0; i < books.length; i++) {
    const list = document.createElement('ul')
    
    const listItem[i] = document.createElement("li")
    listItem[i].textContent = books[i].author
    list.appendChild(listItem[i])
    element.appendChild(list)
    const listItem[i] = document.createElement("li")
    listItem[i].textContent = books[i].name
    list.appendChild(listItem[i])
    element.appendChild(list)
    
}