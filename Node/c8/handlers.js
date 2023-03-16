const home = (req,res) => {
    res.send('OK Home')
}


const calculator = (req,res) => {
    let result=0;
    switch (req.params.operation) {
        case 'plus':
            result = Number(req.query.a) + Number(req.query.b)
            break;
        case 'minus':
            result = Number(req.query.a) - Number(req.query.b)
            break;
        case 'delenje':
            result = Number(req.query.a) / Number(req.query.b)
            break;
        case 'mnozenje':
            result = Number(req.query.a) * Number(req.query.b)
            break;
        default:
            break;
    }
    res.send(result.toString())
}


const calculator2 = (req,res) => {
    console.log(req.body) // req.body gi ima JOSN podatocite isprateni od klientska strana

        let result=0;
        switch (req.params.operation) {
            case 'plus':
                result = Number(req.body.a) + Number(req.body.b)
                break;
            case 'minus':
                result = Number(req.body.a) - Number(req.body.b)
                break;
            case 'delenje':
                result = Number(req.body.a) / Number(req.body.b)
                break;
            case 'mnozenje':
                result = Number(req.body.a) * Number(req.body.b)
                break;
            default:
                break;
        }
        res.send(result.toString())

}

module.exports = {
    home,
    calculator,
    calculator2
}