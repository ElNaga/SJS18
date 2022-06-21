Blocks = [
    {
        gym: false,
        school: true,
        store: false,
    },
    {
        gym: true,
        school: false,
        store: false,
    },
    {
        gym: true,
        school: true,
        store: false,
    },
    {
        gym: false,
        school: true,
        store: false,
    },
    {
        gym: false,
        school: true,
        store: true,
    }
]

Reqs = ['gym', 'school']

//let distance = [] //g,s

var distance = new Array(2);
console.log('dostamce is',distance)
for (var i = 0; i < Blocks.length; i++) {
  distance[i] = new Array(2);
}
console.log(distance)


for (let i = 0; i < distance.length; i++) {
    for (let j = 0; j < distance[i].length; j++) {
        distance[i][j] = 0
        
    }
    
}
console.log(distance,'\n')

for (let i = 0; i < Blocks.length; i++) {

    if (Blocks[i].gym) {
        distance[i] = [0,0]
    } else {
    for (let g = 0; g < Blocks.length; g++) {

        if (Blocks[g].gym) {
            if (distance[i][0] <= (Math.abs(g - i))) {
                distance[i] = [(g - i), 0]
                break
            }
        }
    }}  


    if (Blocks[i].school) {
        distance[i][1] = 0
    } else {
    for (let s = 0; s < Blocks.length; s++) {

        if (Blocks[s].school) {
            if (distance[i][1] <= (Math.abs(s - i))) {
                distance[i][1] = (s-i)
                break
            }
        }
    }}  

    

}


for (let i = 0; i < distance.length; i++) {
    for (let j = 0; j < distance[i].length; j++) {
        
        console.log(Math.max(Math.abs(distance[i],distance[j])))
        
    }
    
}
console.log(distance)

// function checkDistance (distance) {

//     let sum = new Array(distance.length,0)
//     for (let i = 0; i < distance.length; i++) {
//         for (let j = 0; j < distance[i].length; j++) {
//             sum[i] = sum[i] + distance[i][j]
            
//         }
        
//     }

//     return sum
// }
