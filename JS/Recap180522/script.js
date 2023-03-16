const input = [
    {
      name: 'John',
      age: 13,
      hieght: 24
    },
    {
      name: 'Mark',
      age: 56,
      hieght: 25
    },
    {
      name: 'Rachel',
      age: 45,
      hieght: 26
    },
    {
      name: 'Nate',
      age: 67,
      hieght: 27
    },
    {
      name: 'Jeniffer',
      age: 65,
      hieght: 33
    }
  ];

// const names = input.map(input => {
//     return input.name;
// })
// console.log(names)

// const heights = input.map(input => input.hieght)
// console.log(heights)

// const minifiedRecords = input.map(input => ({
//     name: input.name,
//     age: input.age
// }))
// console.log(minifiedRecords)


const newTest = input.map(function (value){
    console.log(value)
    console.log('---' + this)
    console.log()
},[
    444 , 555+3
]

)