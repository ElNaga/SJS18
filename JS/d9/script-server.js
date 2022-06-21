//First patr: Get the info from server

let userObject

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(dataUsers => {

        get_usable_user_data(dataUsers)
        generateHTMLElementsForUserData(get_usable_user_data(dataUsers))

    })




//userData = getUserData("https://jsonplaceholder.typicode.com/users")


function get_usable_user_data(data) {
    console.log(data)

    let arrayAddress = (Object.values(data[0].address))
    let userAddress = (arrayAddress[2] + ' City, ' + arrayAddress[0] + ' st., ' + arrayAddress[1])

    let userName = data[0].name
    let userEmail = data[0].email
    let userWebsite = data[0].website
    let array = []

    //declaring the variables, and seeing the logic of where is the //value

    for (let i = 0; i < data.length; i++) {

        arrayAddress = (Object.values(data[i].address))
        userAddress = (arrayAddress[2] + ' City, ' + arrayAddress[0] + ' street, ' + arrayAddress[1])

        userName = data[i].name
        userEmail = data[i].email
        userWebsite = data[i].website
        array[i] = [userName, userAddress, userEmail, userWebsite]



    }
    console.log(array)
    return array
}
//Kreiraj karta za:
//ime
//ptrximr
//email
//website
//adresa na ziveenje


//mi treba data[x].adress


function generateHTMLElementsForUserData(data) {
    var htmlContainer = document.getElementById("container")
    //const htmlCard = document.getElementById('card')



    for (let c = 0; c < data.length; c++) {
        //creatind the cards
        var newCard = document.createElement('div')
        newCard.className = 'card'
        htmlContainer.append(newCard)
        console.log(c)

        //seting name of user on card
        var htmlNamePara = document.createElement("p")
        htmlNamePara.className = 'NameClass'
        htmlNamePara.innerText = data[c][0]
        newCard.append(htmlNamePara)

        //setting mail
        var htmlNamePara = document.createElement("p")
        htmlNamePara.className = 'MailClass'
        htmlNamePara.innerText = data[c][2]
        newCard.append(htmlNamePara)

        //seting address info on card
        var htmlAddressPara = document.createElement("p")
        htmlAddressPara.className = 'AddressClass'
        htmlAddressPara.innerText = data[c][1]
        newCard.append(htmlAddressPara)

        //seting website into card
        var htmlNamePara = document.createElement("p")
        htmlNamePara.className = 'WebsiteClass'
        htmlNamePara.innerHTML = "<a href='" + 'https://www.' + data[c][3] + "'>" + data[c][3] + "</a>"
        newCard.append(htmlNamePara)
    }



}



