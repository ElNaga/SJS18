async function getPosts() {
    document.getElementById('loading').style.visibility = 'visible'
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    //HTTP STATUS CODE
    //200(succsses - ok), 201(created - ok) - something was succses
    //3xx - multiple choice 301, 302, 308(permanent redirect)
    //4xx - error (client side error) (404 - endpoint not found)
    //403 - access forbiden, 405 - wrong format
    //401 - unauthorized access to end point 
    //
    //5xx - server side errors
    //500 - server unreachable
    //501 - 
    //502 - bad gateway
    //503 - server unavailable - server down
    // if (response.status.startsWith('4')) {
    //     console.log('Client side error')
    // }
    const data = await response.json()
    
    .catch(error => {

    })
    document.getElementById('loading').style.visibility = 'hidden'
    generateHTML(data)
    createPost(data)
}


const generateHTML = (data) => {
    console.log(data)
}

 async function createPost (data) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            email: "koco@test.com",
            name: 'Koco nica'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })

    const data2 = await response.json()
    console.log(data2)
    console.log(data)
}