
// const calculator = async (req, res) => {
//     let result = 0;
//     console.log(req.body)
//     let operacija = req.body.operator;
//     switch (operacija) {
//         case 'plus':
//             console.log('here i am');
//             console.log(operacija);
//             result = Number(req.body.varA) + Number(req.body.varB);
//             console.log(result);
//         case 'minus':
//             console.log(operacija);
//             result = Number(req.body.varA) - Number(req.body.varB);
//             console.log(result);
//         case 'mnozenje':
//             console.log(operacija);
//             result = Number(req.body.varA) * Number(req.body.varB);
//             console.log(result);
//         case 'delenje':
//             console.log(operacija);
//             result = Number(req.body.varA) / Number(req.body.varB);
//             console.log(result);
//         default:
//             break;
//     }

//     return result;
// }


const calculator = async (req, res) => {

    return new Promise((success, fail) => {

        let operacija = req.body.operator;
        switch (operacija) {
            case 'plus':
                return success(Number(req.body.varA) + Number(req.body.varB));
            case 'minus':
                return success((req.body.varA) - (req.body.varB));
            case 'mnozenje':
                return success((req.body.varA) * (req.body.varB));
            case 'delenje':
                return success((req.body.varA) / (req.body.varB));
            default:
                return fail();
        }
    })

}


module.exports = {
    calculator
}
