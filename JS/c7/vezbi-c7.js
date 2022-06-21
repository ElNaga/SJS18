const mailList = [
    'alek@tse.com',
    'mera@gmail.com',
    'meri.bet',
    'se mos a@kademija.com'
]

function validateEmails() {
    const invalidMails = mailList.filter((mail) => {

        if (!mail.includes('@')) {
            return true
        }
        if (!mail.includes('.com') && !mail.includes('.net')) {
            return true
        }
        if (mail.includes(' ')) {
            return true
        }
        return false
    }
    )
    console.log(invalidMails)
}

// validateEmails(mailList)


const iminja = [
    'alek',
    'Martin Martinov',
    'blabla bl BvVDS',
    'Ataturk',

]


function formatName(listName) {

    for (let name of listName) {
        const arr = name.split(" ");


        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();

        }

        const str2 = arr.join(" ");
        console.log(str2);
    }

}

formatName(iminja)



