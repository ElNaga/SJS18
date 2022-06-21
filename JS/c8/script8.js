class Student {
    indexNo = 1
    #semestar = 1 
    avgGrade = 1

    constructor(a,b,c,d) {
        this.avgGrade = b
        this.indexNo = a
        this.#semestar = c
        this.subjects = d
    }

    getSemester () {
        return this.#semestar
    }

    setSemester (smester) {
        this.#semestar = smester
    }
}

const StudentOne = new Student()
const StudentTwo = new Student(2,3,4)

console.log(StudentOne,StudentTwo)

console.log(StudentTwo.getSemester())