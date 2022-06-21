class Employee {
    id
    name
    surname
    accountId

    constructor (id,name,surname,accountId) {
        this.id = id
        this.name = name
        this.surname = surname
        this.accountId = accountId
    
    }

    setId (id) {
        this.id = id
    }
}

class ITEmployee extends Employee {
    role

    constructor(role,id) {
        super(id,this.name,surname,this.accountId)
        this.role = role
        
        
    }
    
    
}

const IT1 = new ITEmployee('admin',1,2,3,4)
console.log(IT1)