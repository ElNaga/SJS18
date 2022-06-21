let temper = [20,23,24,26,24,23,25,26]

let minimumTemp = 0;
let maximumTemp = 0;

console.log(temper)
console.log('Srednata vrenost e: ')
let avg = 0


maximumTemp = temper[0]
minimumTemp = temper[0]
for (let i = 0; i < temper.length; i++) {
    avg = avg+ temper[i]
    if (temper[i]>=maximumTemp) {
        maximumTemp = temper[i]
    }
    if (temper[i]<=minimumTemp){
        minimumTemp = temper[i]
    }
}

// istoto e mozno so console.log( Math.max(temper) )
// ili console.log( Math.min(temper) )

avg=avg/temper.length
console.log(avg+ ' stepeni C.')
console.log( 'Maksimalnata temperatura e: '+maximumTemp+', a minimalnata e: '+minimumTemp+ ' stepeni C.' )
