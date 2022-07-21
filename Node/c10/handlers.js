
const calculator = (data) => {
    //console.log(req.body)
    let operacija = data.operator;
    switch (operacija) {
        case 'plus':
            console.log('here i am');
            console.log(operacija);
            return Number(data.varA) + Number(data.varB);
        case 'minus':
            console.log(operacija);
            return Number(data.varA) - Number(data.varB);
        case 'mnozenje':
            console.log(operacija);
            return Number(data.varA) * Number(data.varB);
        case 'delenje':
            console.log(operacija);
            return Number(data.varA) / Number(data.varB);
        default:
            return 0;
    }

}


// const calculator = async (req, res) => {

//     return new Promise((success, fail) => {

//         let operacija = req.body.operator;
//         switch (operacija) {
//             case 'plus':
//                 return success(Number(req.body.varA) + Number(req.body.varB));
//             case 'minus':
//                 return success((req.body.varA) - (req.body.varB));
//             case 'mnozenje':
//                 return success((req.body.varA) * (req.body.varB));
//             case 'delenje':
//                 return success((req.body.varA) / (req.body.varB));
//             default:
//                 return fail();
//         }
//     })
// }


module.exports = {
    calculator
}
