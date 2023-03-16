// // storage

// localStorage.setItem('ime', 'Koco')
// const ime = localStorage.getItem('ime')
// localStorage.removeItem('ime')
// //localStorage.clear()

// //sessionStorage.setItem('ime','auau')

// // localStorage.setItem('niza',[
// //     {
// //         name: 'yes',
// //         free:'yes'
// //     }
// // ])


// const niza =
// {
//     name: 'yes',
//     free: 'yes'
// }

// let nizaAsJSON = JSON.stringify(niza)
// console.log(nizaAsJSON)

// const backendObject = JSON.parse(nizaAsJSON)
// console.log(backendObject)

// localStorage.setItem('key1', nizaAsJSON)





function addAnimal() {


    let animals = localStorage.getItem('animals')
    if (!animals) {
        animals = []
    } else {
        animals = JSON.parse(animals)
    }



    const animal = document.getElementById('animalType').value
    const numberOfAnimals = document.getElementById('numberOfAnimals').value
    const toPush = {
        animal: animal,
        number: numberOfAnimals
    }
    //animals.push(toPush)

animals = animals.map(animal => {

    if (animal.type === toPush.type) {
        return {...animals, number: Number(animal.number) + Number(toPush.number)}
    }
    return animal

}
)

    animals = [...animals, toPush]
    
    localStorage.setItem('animals', JSON.stringify(animals))
}
