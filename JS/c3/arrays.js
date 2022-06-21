// //nizi

// let animals = []

// animals = ["Cat","Dog","Parrot","Rabbit"]
// console.log(animals[1])


// let friends = [
// //     'aleksandar',
// //     'Simona',
// //     'Petar',
// //     'Sanja'
// // 
// ]

// // for (let d = 0; d < friends.length; d++)
// // {
// //     console.log(friends[d])
// // }

// // friends.push('Aleksandra')


// //     console.log(friends)
// // friends.unshift('Kristijan')
// // friends.pop()
// // friends.shift()
// // console.log(friends)

// // console.log(friends.concat(animals))
// // console.log(friends)

// // friends[0] = prompt('Vnesi prijatel')
// // console.log(friends)

// let c = prompt("bnesi br")

// for (let i = 0; i < c; i++) {

//     friends.push(prompt('Vnesi ima'))
//     console.log(friends[i])
// }

// // for (let i = 0; i < friends.length; i++) {
// //     console.log(friends[i])
// // }

// console.log(friends)



// let niza = [1,2,3,4]

// broj = niza.length

// for (let i = 0; i < niza.length; i++) {
//     console.log(niza.length-i)
    
// }

// let temper = [20,23,24,26,24,23,25,26]
// let avg = 0

// for (let i = 0; i < temper.length; i++) {
//     avg = avg+ temper[i]
// }
// avg=avg/temper.length
// console.log(avg)




// let niza2 = []

// for (let i = 0; i < niza2.length; i++) {
//     console.log()
// }


let nizaVal = [
1,'ettest',null,2,3,undefined
]
let nizaCis= []
let c = 0
for (let i = 0; i < nizaVal.length; i++) {
    if (nizaVal[i]) {
        nizaCis[c]=nizaVal[i]
        c++
    }
}



console.log(nizaCis)


const ValNiza= [1,'ettest',null,2,3,undefined]
const CisNiza = []

for (let i = 0; i < ValNiza.length; i++) {
    if(ValNiza[i]){
        CisNiza.push(ValNiza[i])
    }
    
}

console.log(CisNiza)