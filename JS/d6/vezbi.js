// // storage - mehanizam za zacuvuvanje na podatoci

// localStorage.setItem('ime', 'Koco')
// const ime = localStorage.getItem('ime') // kje vrati "Koco"
// console.log(ime)
// // localStorage.removeItem('ime')
// // localStorage.clear()

// // javascript object notation
// const book = {
//   name: 'Crime and punishment',
//   author: 'Fyodor Dostoyevsky',
//   year: 1887,
//   read: true
// }

// const bookAsJson = JSON.stringify([book])
// console.log(book)
// console.log(bookAsJson)


// localStorage.setItem('books', bookAsJson)
// // alert(bookAsJson)


const addAnimals = () => {
  const animalType = document.getElementById('animalType')
  const numOfAnimal = document.getElementById('numOfAnimal')

  // guard clause
  if (!animalType.value || !numOfAnimal.value) {
    alert("Please insert the animal type and the number of specimens")
    return
  }

  // make a new animal object to be inserted in the local storage
  const newAnimal = {
    type: animalType.value.toLowerCase(),
    number: numOfAnimal.value
  }

  // check if the animal array exists (when the app is loaded for the first time, the list does NOT exist)
  let animals = localStorage.getItem('animals')
  if (!animals) {
    animals = []
  } else {
    // we need to convert the string variable to array in order to push new items
    animals = JSON.parse(animals)
  }

  let animalAlreadyExists = false
  // proverka dali veke postoi toj tip na zivotno
  animals = animals.map(animal => {
    if (animal.type === newAnimal.type) {
      animalAlreadyExists = true
      return { ...animal, number: Number(animal.number) + Number(newAnimal.number) }
    }
    return animal
  })

  // ako ne postoi
  // add the new animals in the list
  if (!animalAlreadyExists) {
    animals = [...animals, newAnimal] // animals.push(newAnimal)
  }

  // add  the modified list back into the local storage
  localStorage.setItem('animals', JSON.stringify(animals))

  generateListOfAnimalsHtml(animals)
}

const generateListOfAnimalsHtml = (animalsArray) => {
  const htmlContainer = document.getElementById('container')
  // if the UL already exists, remove it and re-generate it again
  const listOfAnimals = document.getElementById('listOfAnimals')
  if (listOfAnimals) {
    listOfAnimals.remove()
  }

  const htmlList = document.createElement('ul')
  htmlList.id = 'listOfAnimals'
  htmlContainer.appendChild(htmlList)

  animalsArray.forEach(animal => {
    const htmlItem = document.createElement('li')
    htmlItem.textContent = `${animal.type} - ${animal.number} number of species`
    htmlList.appendChild(htmlItem)
  })
}

// on application load fetch the animal list from local storage and generate HTML
generateListOfAnimalsHtml(JSON.parse(localStorage.getItem('animals')))

// var i = 0;
// function searching() {



//   while (  i === 0) {
//     let htmlUL = document.getElementById('listOfAnimals')
//     htmlUL.remove()
//     i++;
//     console.log(i)
//   } 

//   let searchItem = document.getElementById('searchField').value
//   if () {

//   }
// }

function search(value) {
  const initialList = JSON.parse(localStorage.getItem('animals')) 
  const filteredList = initialList.filter((animal) => {
    if (animal.type.includes(value)){
      return true
    }
    return false
  })
  generateListOfAnimalsHtml(filteredList)
}

function Reset() {
document.getElementById('searchField').value = ''
generateListOfAnimalsHtml(JSON.parse(localStorage.getItem('animals')))
}