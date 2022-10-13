const bcrypt = require('bcryptjs')
const user = require('../pkg/user')

const create = async(req, res) => {
try {
    // console.log(req.body);
    // req.body.password = bcrypt.hashSync(req.body.password)
    // console.log(req.body);
    
    // 1. proveri dali pas1 i 2 se isti
    if (
        req.body.password.trim().length === 0
        || req.body.password !== req.body.password2
        ) {
        return res.status(400).send('Bad request')
    }
    // 2. proveri dali postoi korisnik so istiot email vo baza
    let u = await user.getUserByEmail(req.body.email);
    if(u) {
        return res.status(409).send('Conflict')
    }
    // 3. hasshuvaj ja lozinkata
    req.body.password = bcrypt.hashSync(req.body.password);
    // 4. zapishi go noviot korisnik vo baza
    let usr = user.create(req.body);
    return  res.send(usr).status(201)
} catch(err) {
    console.log(err)
    return res.status(500).send('Internal server error')
}
}

const login = (req, res) => {
   return  res.send('Ok')
}
const forgotPassword = (req, res) => {
    return res.send('Ok')
}
const resetPassword = (req, res) => {
   return  res.send('Ok')
}
const validate = (req, res) => {
   return  res.send('Ok')
}

module.exports = {
    create,
    login,
    forgotPassword,
    resetPassword,
    validate
}