// //promisses and fetch!!!

// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Request completed successfuclly')
//         reject('Rejected request')
//     }, 1500)
// })

// request.then((response) => { console.log(response) },
//     (error) => { console.log(error) }

// )


function makeRequest () {

    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then(json => console.log(json))
}